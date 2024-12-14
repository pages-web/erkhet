"use client";

import ChooseProducts from "@/components/choose-products/choose-products";
import { onError } from "@/lib/utils";
import { mutations, queries } from "@/sdk/graphql/order";
import {
  donateItemAtom,
  donateOrderIdAtom,
  donateViewAtom,
  deliveryInfoAtom,
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
import DonateInfo from "./info";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loading } from "@/components/ui/loading";
import PaymentMethods from "../payment/payment-methods";
import PaymentDetail from "../payment/payment-detail";
import Steps from "@/components/choose-products/steps";
import { toast } from "sonner";
import { ArrowLeftIcon, CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const setDeliveryInfo = useSetAtom(deliveryInfoAtom);
  const unitProduct = products.find(
    (product) => product.unitPrice === 1
  ) as IProduct;

  const { data, loading, refetch } = useQuery(queries.donateOrderDetail, {
    skip: !Boolean(donateOrderId),
    variables: {
      id: donateOrderId,
      customerId: "visitor",
    },
    onCompleted({ orderDetail }) {
      const { items, deliveryInfo } = orderDetail;
      const { _id, productId, count, unitPrice } = items[0] || {};
      setDonateItem({ _id, productId, count, unitPrice });
      !!deliveryInfo && setDeliveryInfo(deliveryInfo);
    },
  });

  const onCompleted = (_id: string) => {
    setDonateOrderId(_id);
    donateOrderId && refetch();
    view === "" && setView("info");
    view === "info" && setView("payment");
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

  const reset = () => {
    setView("");
    setDonateOrderId("");
    setDonateItem(null);
    setDeliveryInfo({
      name: "",
      phone: "",
      description: "",
    });
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
      <CardHeader className="flex items-center justify-between flex-row ">
        <CardTitle>Хандив өгөх</CardTitle>
      </CardHeader>
      {loading ? (
        <>
          <CardContent>
            <Loading />
          </CardContent>
          <CardFooter />
        </>
      ) : (
        <>
          {view === "" && (
            <ChooseProducts products={products} unitProduct={unitProduct} />
          )}
          {view === "info" && <DonateInfo />}
          {view === "payment" && (
            <>
              <CardContent className="py-0 md:py-0">
                <PaymentMethods />
              </CardContent>
              <CardFooter className="flex-col">
                <PaymentDetail />
                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  className="w-full !mt-4"
                  disabled={loading}
                  onClick={() => setView("info")}
                >
                  <ArrowLeftIcon className="h-5 w-5 mr-2 -ml-2" />
                  Буцах
                </Button>
              </CardFooter>
            </>
          )}
          {view === "success" && (
            <>
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-green-200 flex items-center justify-center">
                    <CheckIcon className="h-10 w-10 stroke-green-700 " />
                  </div>
                  <div className="text-xl font-semibold pt-6 text-center">
                    Таны хандивыг амжилттай <br /> хүлээн авлаа.
                  </div>
                  <div className="text-neutral-500 pt-2">
                    Биднийг дэмжиж хандив өгсөн танд баярлалаа
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full" onClick={reset}>
                  Эхлэл рүү буцах
                </Button>
              </CardFooter>
            </>
          )}
        </>
      )}
    </DonateContext.Provider>
  );
};

export default Donate;
