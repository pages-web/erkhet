"use client";
import { IProduct } from "@/types/product.types";
import { CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useAtom } from "jotai";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { LoadingIcon } from "../ui/loading";
import { donateItemAtom } from "@/store/donate.store";
import { useDonate, ValidateProduct } from "@/containers/donate/donate";

const ChooseProducts = ({
  products,
  unitProduct,
}: {
  products: IProduct[];
  unitProduct?: IProduct;
}) => {
  const { loading, action } = useDonate();

  const [item, setItem] = useAtom(donateItemAtom);

  const radioValue =
    item?.productId !== unitProduct?._id ? item?.productId || "" : "";

  const radioValueChange = (value: string) => {
    const { _id, unitPrice } =
      products.find((product) => product._id === value) || ({} as IProduct);

    setItem({
      _id: Math.random().toString(),
      productId: _id,
      count: 1,
      unitPrice,
    });
  };

  return (
    <>
      <CardContent className="md:py-0 text-black">
        <RadioGroup
          defaultValue="comfortable"
          className="grid "
          onValueChange={radioValueChange}
          value={radioValue}
        >
          {(products || [])
            .filter((product) => product.unitPrice !== 1)
            .sort((a, b) => a.unitPrice - b.unitPrice)
            .map((product) => (
              <div className="relative" key={product._id}>
                <Label
                  className="flex items-center gap-2 border border-gray-400 p-4 rounded"
                  key={product._id}
                  htmlFor={product._id}
                >
                  <RadioGroupItem
                    value={product._id}
                    id={product._id}
                    className="peer"
                  />
                  <span className="font-medium text-lg text-gray-700">
                    {product.unitPrice.toLocaleString()}₮
                  </span>
                  {radioValue === product._id && (
                    <span className="block absolute inset-0 rounded-md border-2 border-[#383A42]" />
                  )}
                </Label>
              </div>
            ))}
        </RadioGroup>
      </CardContent>
    </>
  );
};

export default ChooseProducts;
