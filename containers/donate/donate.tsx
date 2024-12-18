"use client";

import ChooseProducts from "@/components/choose-products/choose-products";
import { onError } from "@/lib/utils";
import { mutations, queries } from "@/sdk/graphql/order";
import {
  donateItemAtom,
  donateOrderIdAtom,
  donateViewAtom,
} from "@/store/donate.store";
import { IProduct } from "@/types/product.types";
import {
  ApolloCache,
  DefaultContext,
  MutationFunctionOptions,
  OperationVariables,
  useMutation,
  useQuery,
} from "@apollo/client";
import { useAtom, useSetAtom } from "jotai";
import { createContext, useContext } from "react";

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
  refetch: () => void;
};

type ContextProps = DonateProps;

const DonateContext = createContext<ContextProps | null>(null);

export function useDonate() {
  const context = useContext(DonateContext);

  if (!context) {
    throw new Error("useDonate must be used within a <Donate />");
  }

  return context;
}

export type ValidateProduct = (
  func: (params: any) => void,
  params?: any
) => void;

const Donate = ({ products }: { products: IProduct[] }) => {
  const [view, setView] = useAtom(donateViewAtom);
  const [donateOrderId, setDonateOrderId] = useAtom(donateOrderIdAtom);
  const [donateItem, setDonateItem] = useAtom(donateItemAtom);
  const unitProduct = products?.find(
    (product) => product.unitPrice === 1
  ) as IProduct;

  const { data, loading, refetch } = useQuery(queries.donateOrderDetail, {
    skip: !Boolean(donateOrderId),
    variables: {
      id: donateOrderId,
      customerId: "visitor",
    },
    onCompleted({ orderDetail }) {
      const { items } = orderDetail;
      const { _id, productId, count, unitPrice } = items[0] || {};
      setDonateItem({ _id, productId, count, unitPrice });
    },
  });

  const onCompleted = (_id: string) => {
    setDonateOrderId(_id);
    donateOrderId && refetch();
  };

  const variables = {
    items: [donateItem],
    totalAmount: (donateItem?.count || 1) * (donateItem?.unitPrice || 1),
    customerType: "visitor",
    type: "eat",
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

  const validateProduct: ValidateProduct = (func, params) => {
    return func(params);
  };

  const { orderDetail } = data || {};

  return (
    <DonateContext.Provider
      value={{
        loading: orderAdd.loading || orderEdit.loading,
        action: donateOrderId ? edit : add,
        variables,
        detail: orderDetail,
        refetch,
      }}
    >
      <>
        {view === "" && (
          <ChooseProducts
            products={products}
            unitProduct={unitProduct}
            validateProduct={validateProduct}
          />
        )}
      </>
    </DonateContext.Provider>
  );
};

export default Donate;
