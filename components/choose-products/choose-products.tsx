'use client';
import { IProduct } from '@/types/product.types';
import { CardContent, CardFooter } from '../ui/card';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { useState } from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { cartAtom } from '@/store/cart.store';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { cudOrderAtom, loadingOrderAtom } from '@/store/order.store';
import { LoadingIcon } from '../ui/loading';
import { donateItemAtom } from '@/store/donate.store';
import { useDonate } from '@/containers/donate/donate';

const ChooseProducts = ({ products }: { products: IProduct[] }) => {
  const { loading, action } = useDonate();
  const unitItem = products.find(
    (product) => product.unitPrice === 1
  ) as IProduct;
  const [item, setItem] = useAtom(donateItemAtom);
  const [customAmount, setCustomAmount] = useState<undefined | number | string>(
    undefined
  );

  const radioValue =
    item?.productId !== unitItem?._id ? item?.productId || '' : undefined;

  const radioValueChange = (value: string) => {
    const { _id, unitPrice } =
      products.find((product) => product._id === value) || ({} as IProduct);

    setCustomAmount('');

    setItem({
      _id: Math.random().toString(),
      productId: _id,
      count: 1,
      unitPrice,
    });
  };

  const handleCustomValueChange = (value: string) => {
    setItem({
      _id: Math.random().toString(),
      productId: unitItem._id,
      count: Number(value),
      unitPrice: 1,
    });
  };

  const handleSubmit = () => {
    action();
  };

  return (
    <>
      <CardContent className="md:py-0">
        <RadioGroup
          defaultValue="comfortable"
          className="grid grid-cols-2"
          onValueChange={radioValueChange}
          value={radioValue}
        >
          {(products || [])
            .filter((product) => product.unitPrice !== 1)
            .sort((a, b) => a.unitPrice - b.unitPrice)
            .map((product) => (
              <div className="relative" key={product._id}>
                <Label
                  className="flex items-center gap-2 border p-4 rounded-md"
                  key={product._id}
                  htmlFor={product._id}
                >
                  <RadioGroupItem
                    value={product._id}
                    id={product._id}
                    className="peer"
                  />
                  <span className="font-bold text-base">
                    {product.unitPrice.toLocaleString()}₮
                  </span>
                  {radioValue === product._id && (
                    <span className="block absolute inset-0 rounded-md border-2 border-primary" />
                  )}
                </Label>
              </div>
            ))}
        </RadioGroup>
        {!!unitItem && (
          <div className="mt-6">
            <Label className="pb-2 block">Custom Amount</Label>
            <Input
              type="number"
              value={customAmount}
              className="font-bold"
              placeholder="Custom Amount ₮"
              onChange={(e) => handleCustomValueChange(e.target.value)}
            />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          size="lg"
          className="w-full"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading && <LoadingIcon />} Donate
        </Button>
      </CardFooter>
    </>
  );
};

export default ChooseProducts;
