"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { useMutation, useQuery } from "@apollo/client";
import { CardContent, Card, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { onError } from "@/lib/utils";
import { mutations, queries } from "@/sdk/graphql/order";
import DonateInfo from "@/containers/donate/info";

import Hello from "@/components/title/Hello";
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
} from "@apollo/client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

export const useDonate = () => {
  const context = useContext(DonateContext);

  if (!context) {
    throw new Error("useDonate must be used within a <Donate />");
  }

  return context;
};

export type ValidateProduct = (
  func: (params: any) => void,
  params?: any
) => void;
export default function Donate({ products }: { products: IProduct[] }) {
  const [view] = useAtom(donateViewAtom);
  const [donateOrderId, setDonateOrderId] = useAtom(donateOrderIdAtom);
  const [donateItem, setDonateItem] = useAtom(donateItemAtom);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const unitProduct = products?.find(
    (product) => product.unitPrice === 1
  ) as IProduct;

  const { data, loading, refetch } = useQuery(queries.donateOrderDetail, {
    skip: !donateOrderId,
    variables: {
      id: donateOrderId,
      customerId: "visitor",
    },
    onCompleted({ orderDetail }) {
      if (!orderDetail?.items?.[0]) return;
      const { _id, productId, count, unitPrice } = orderDetail.items[0];
      setDonateItem({ _id, productId, count, unitPrice });
    },
  });

  const variables = {
    items: [donateItem],
    totalAmount: (donateItem?.count || 1) * (donateItem?.unitPrice || 1),
    customerType: "visitor",
    type: "eat",
    _id: donateOrderId,
  };

  const handleOrderCompleted = (_id: string) => {
    setDonateOrderId(_id);
    if (donateOrderId) refetch();
  };

  const [add, { loading: addLoading }] = useMutation(mutations.ordersAdd, {
    onError,
    variables,
    onCompleted(data) {
      handleOrderCompleted(data?.ordersAdd?._id);
    },
  });

  const [edit, { loading: editLoading }] = useMutation(mutations.ordersEdit, {
    onError,
    variables,
    onCompleted(data) {
      handleOrderCompleted(data?.ordersEdit?._id);
    },
  });

  const validateProduct: ValidateProduct = (func, params) => func(params);

  const handleProductChange = async (productId: string) => {
    setIsUpdating(true);
    try {
      const product = products.find((p) => p._id === productId);
      if (!product) {
        console.warn("Selected product not found");
        return;
      }

      const newItem = {
        _id: crypto.randomUUID(),
        productId: product._id,
        count: 1,
        unitPrice: product.unitPrice,
      };

      setSelectedProduct(product);
      await setDonateItem(newItem);

      const mutation = donateOrderId ? edit : add;
      await validateProduct(mutation, {
        variables: { ...variables, items: [newItem] },
      });
    } catch (error) {
      console.error("Error selecting product:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    setSelectedProduct(null);
    setDonateItem(null);
  }, [setDonateItem]);

  const { orderDetail } = data || {};
  const radioValue =
    donateItem?.productId !== unitProduct?._id
      ? donateItem?.productId || ""
      : "";

  if (view !== "") {
    return null;
  }

  const categories = {
    AAN: products.filter(
      (product) => product.category?.name === "Аж ахуй нэгж байгууллага"
    ),
    TGB: products.filter(
      (product) => product.category?.name === "Тайлан гаргадаг байгууллага"
    ),
    Busad: products.filter((product) => product.category?.name === "Бусад"),
  };

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
      <div className="container flex gap-10 mt-16">
        <Card className="lg:w-[600px] bg-white flex-none relative">
          <Tabs defaultValue="price-1">
            <TabsList className="grid grid-cols-3 mx-3 mt-3 gap-3 mb-4">
              <TabsTrigger
                value="price-1"
                className="border border-gray-300 rounded-lg p-2 hover:border-gray-400 aria-selected:border-black"
              >
                ААН
              </TabsTrigger>
              <TabsTrigger
                value="price-2"
                className="border border-gray-300 rounded-lg p-2 hover:border-gray-400 aria-selected:border-black"
              >
                ТГБ
              </TabsTrigger>
              <TabsTrigger
                value="price-3"
                className="border border-gray-300 rounded-lg p-2 hover:border-gray-400 aria-selected:border-black"
              >
                Бусад
              </TabsTrigger>
            </TabsList>

            {Object.entries(categories).map(
              ([key, categoryProducts], index) => (
                <TabsContent
                  key={key}
                  value={`price-${index + 1}`}
                  className="p-4 space-y-4 pb-8"
                >
                  <CardContent>
                    <RadioGroup
                      onValueChange={handleProductChange}
                      value={donateItem?.productId || ""}
                      className="space-y-4 grid grid-cols-1 "
                      disabled={isUpdating}
                    >
                      {categoryProducts
                        .filter((product) => product.unitPrice !== 1)
                        .sort((a, b) => a.unitPrice - b.unitPrice)
                        .map((product) => {
                          const isSelected = radioValue === product._id;
                          return (
                            <div
                              key={product._id}
                              className={`
                            relative rounded-lg border p-4 
                            cursor-pointer transition-shadow duration-200
                            ${
                              isSelected
                                ? "border-primary shadow-lg"
                                : "border-gray-300 hover:shadow-md"
                            }
                          `}
                            >
                              <Label
                                htmlFor={product._id}
                                className="flex items-center gap-4 w-full cursor-pointer"
                              >
                                <RadioGroupItem
                                  value={product._id}
                                  id={product._id}
                                  className="peer hidden"
                                  disabled={isUpdating}
                                />
                                <div className="flex-1 flex flex-col">
                                  <span className="text-xl font-semibold text-gray-800">
                                    {product.unitPrice.toLocaleString()}₮
                                  </span>
                                  <span className="text-gray-600">
                                    {product.name}
                                  </span>
                                </div>
                              </Label>
                            </div>
                          );
                        })}
                    </RadioGroup>
                  </CardContent>
                </TabsContent>
              )
            )}

            <div className="px-4 flex flex-col gap-3">
              <DonateInfo />
            </div>

            <CardFooter />
          </Tabs>
        </Card>
        <Hello />
      </div>
    </DonateContext.Provider>
  );
}
