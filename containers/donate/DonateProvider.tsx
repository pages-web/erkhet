"use client";

import { createContext, useContext, useState } from "react";
import { useAtom } from "jotai";
import { useQuery, useMutation } from "@apollo/client";
import { mutations, queries } from "@/sdk/graphql/order";
import { donateItemAtom, donateOrderIdAtom } from "@/store/donate.store";

type DonateContextProps = {
  loading: boolean;
  action: () => void;
  variables: any;
  detail?: any;
  refetch: () => void;
};

const DonateContext = createContext<DonateContextProps | null>(null);

export function DonateProvider({ children }: { children: React.ReactNode }) {
  const [donateOrderId, setDonateOrderId] = useAtom(donateOrderIdAtom);
  const [donateItem, setDonateItem] = useAtom(donateItemAtom);

  const { data, loading, refetch } = useQuery(queries.donateOrderDetail, {
    skip: !donateOrderId,
    variables: {
      id: donateOrderId,
      customerId: "visitor",
    },
    onCompleted({ orderDetail }) {
      if (orderDetail?.items?.[0]) {
        const { _id, productId, count, unitPrice } = orderDetail.items[0];
        setDonateItem({ _id, productId, count, unitPrice });
      }
    },
  });

  const variables = {
    items: [donateItem],
    totalAmount: (donateItem?.count || 1) * (donateItem?.unitPrice || 1),
    customerType: "visitor",
    type: "eat",
    _id: donateOrderId,
  };

  const [add, { loading: addLoading }] = useMutation(mutations.ordersAdd, {
    onError: (error) => console.error(error),
    variables,
    onCompleted(data) {
      setDonateOrderId(data?.ordersAdd?._id);
      if (donateOrderId) refetch();
    },
  });

  const [edit, { loading: editLoading }] = useMutation(mutations.ordersEdit, {
    onError: (error) => console.error(error),
    variables,
    onCompleted(data) {
      setDonateOrderId(data?.ordersEdit?._id);
      if (donateOrderId) refetch();
    },
  });

  const { orderDetail } = data || {};

  return (
    <DonateContext.Provider
      value={{
        loading: addLoading || editLoading,
        action: donateOrderId ? edit : add,
        variables,
        detail: orderDetail,
        refetch,
      }}
    >
      {children}
    </DonateContext.Provider>
  );
}
