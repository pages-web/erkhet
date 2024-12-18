"use client";
import { IProduct } from "@/types/product.types";
import { CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useAtom } from "jotai";
import { donateItemAtom } from "@/store/donate.store";
import { useDonate, ValidateProduct } from "@/containers/donate/donate";

import PaymentDetail from "@/containers/payment/payment-detail";
const ChooseProducts = ({
  products,
  unitProduct,
  validateProduct,
}: {
  products: IProduct[];
  unitProduct?: IProduct;
  validateProduct: ValidateProduct;
}) => {
  const { loading, action } = useDonate();
  const [item, setItem] = useAtom(donateItemAtom);

  const radioValue =
    item?.productId !== unitProduct?._id ? item?.productId || "" : "";

  const radioValueChange = async (value: string) => {
    const product = products.find((p) => p._id === value);
    if (!product) return;

    await setItem({
      _id: Math.random().toString(),
      productId: product._id,
      count: 1,
      unitPrice: product.unitPrice,
    });

    // validateProduct-д action функцийг зөв дамжуулсан эсэхийг шалгах
    validateProduct(action, {});
  };

  const handleSubmit = () => validateProduct(action);
  return (
    <>
      <CardContent className="py-4 text-black">
        <RadioGroup
          onValueChange={radioValueChange}
          value={radioValue}
          className="grid grid-cols-1  gap-4"
        >
          {(products || [])
            .filter((product) => product.unitPrice !== 1)
            .sort((a, b) => a.unitPrice - b.unitPrice)
            .map((product) => (
              <div
                key={product._id}
                className={`relative rounded-lg border p-4 cursor-pointer  hover:shadow-lg  ${
                  radioValue === product._id
                    ? "border-1 border-primary shadow-lg"
                    : "border-gray-300"
                }`}
              >
                <Label
                  htmlFor={product._id}
                  className="flex items-center gap-4 w-full"
                >
                  <RadioGroupItem
                    value={product._id}
                    id={product._id}
                    className="peer hidden"
                  />
                  <div className="flex-1 flex flex-col">
                    <span className="text-xl font-semibold text-gray-800">
                      {product.unitPrice.toLocaleString()}₮
                    </span>
                    <span className="text-gray-600">{product.name}</span>
                  </div>
                </Label>
                {radioValue === product._id && (
                  <span className="absolute inset-0 rounded-lg border-1 border-primary pointer-events-none" />
                )}
              </div>
            ))}
        </RadioGroup>
      </CardContent>
    </>
  );
};

export default ChooseProducts;
