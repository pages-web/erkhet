'use client';

import ChooseProducts from '@/components/choose-products/choose-products';
import { onError } from '@/lib/utils';
import { mutations, queries, subscriptions } from '@/sdk/graphql/order';
import {
  donateItemAtom,
  donateOrderIdAtom,
  donateViewAtom,
  deliveryInfoAtom,
} from '@/store/donate.store';
import { IProduct } from '@/types/product.types';
import {
  ApolloCache,
  DefaultContext,
  MutationFunctionOptions,
  OperationVariables,
  useMutation,
  useQuery,
} from '@apollo/client';
import { useAtom, useSetAtom } from 'jotai';
import { createContext, useContext, useEffect } from 'react';
import DonateInfo from './info';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Loading } from '@/components/ui/loading';
import PaymentMethods from '../payment/payment-methods';
import PaymentDetail from '../payment/payment-detail';
import { ORDER_STATUSES } from '@/lib/constants';

type DonateProps = React.PropsWithChildren & {
  loading: boolean;
  action: (
    options?:
      | MutationFunctionOptions<
          any,
          OperationVariables,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined
  ) => void;
  variables?: OperationVariables | undefined;
  detail?: any;
};

type ContextProps = DonateProps;

const DonateContext = createContext<ContextProps | null>(null);

export function useDonate() {
  const context = useContext(DonateContext);

  if (!context) {
    throw new Error('useDonate must be used within a <Donate />');
  }

  return context;
}

const Donate = ({ products }: { products: IProduct[] }) => {
  const [view, setView] = useAtom(donateViewAtom);
  const [donateOrderId, setDonateOrderId] = useAtom(donateOrderIdAtom);
  const [donateItem, setDonateItem] = useAtom(donateItemAtom);
  const setDeliveryInfo = useSetAtom(deliveryInfoAtom);
  const { data, loading, refetch, subscribeToMore } = useQuery(
    queries.donateOrderDetail,
    {
      skip: !Boolean(donateOrderId),
      variables: {
        id: donateOrderId,
        customerId: 'visitor',
      },
      onCompleted({ orderDetail }) {
        const { items, deliveryInfo } = orderDetail;
        const { _id, productId, count, unitPrice } = items[0] || {};
        setDonateItem({ _id, productId, count, unitPrice });
        !!deliveryInfo && setDeliveryInfo(deliveryInfo);
      },
    }
  );

  useEffect(() => {
    if (donateOrderId) {
      subscribeToMore({
        document: subscriptions.ordersOrdered,
        variables: {
          token: process.env.NEXT_PUBLIC_POS_TOKEN,
          statuses: ORDER_STATUSES.ALL,
          customerId: 'visitor',
        },
        updateQuery: (prev, { subscriptionData }) => {
          const { ordersOrdered } = subscriptionData.data || {};
          if (!ordersOrdered) return prev;
          if (ordersOrdered._id === donateOrderId) {
            refetch();
          }
          return prev;
        },
      });
    }
  }, [donateOrderId]);

  const onCompleted = (_id: string) => {
    setDonateOrderId(_id);
    donateOrderId && refetch();
    view === '' && setView('info');
    view === 'info' && setView('payment');
  };

  const variables = {
    items: [donateItem],
    totalAmount: (donateItem?.count || 1) * (donateItem?.unitPrice || 1),
    customerType: 'visitor',
    type: 'eat',
    _id: donateOrderId,
  };

  const [add, orderAdd] = useMutation(mutations.ordersAdd, {
    onError,
    variables,
    onCompleted(data) {
      onCompleted(data?.ordersAdd?._id);
    },
  });

  const [edit, orderEdit] = useMutation(mutations.ordersEdit, {
    onError,
    variables,
    onCompleted(data) {
      onCompleted(data?.ordersEdit?._id);
    },
  });

  if (loading) {
    return (
      <>
        <CardContent>
          <Loading />
        </CardContent>
        <CardFooter />
      </>
    );
  }
  if (data?.orderDetail.paidDate) return <div>Thank you!</div>;

  return (
    <DonateContext.Provider
      value={{
        loading: orderAdd.loading || orderEdit.loading,
        action: donateOrderId ? edit : add,
        variables,
        detail: data?.orderDetail,
      }}
    >
      {view === '' && <ChooseProducts products={products} />}
      {view === 'info' && <DonateInfo />}
      {view === 'payment' && (
        <>
          <CardContent>
            <PaymentMethods />
          </CardContent>
          <CardFooter className="flex-col">
            <PaymentDetail />
          </CardFooter>
        </>
      )}
    </DonateContext.Provider>
  );
};

export default Donate;
