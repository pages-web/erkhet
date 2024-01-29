'use client';

import { ShoppingCartIcon } from 'lucide-react';
import { Counter, CounterButton, CounterInput } from '../counter/counter';
import { Button } from '../ui/button';
import { useState } from 'react';
import { useSetAtom } from 'jotai';
import { addToCartAtom } from '@/store/cart.store';
import { IProduct } from '@/types/product.types';
import { cartSheetAtom } from '@/store';

const AddToCart = (product: IProduct) => {
  const [count, setCount] = useState(1);
  const addToCart = useSetAtom(addToCartAtom);
  const setOpenCart = useSetAtom(cartSheetAtom);
  return (
    <div className="py-4 flex items-center gap-4">
      <Counter size="lg">
        <CounterButton
          minus
          onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
        />
        <CounterInput
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <CounterButton onClick={() => setCount((prev) => prev + 1)} />
      </Counter>
      <Button
        className="h-11 flex-1 font-semibold"
        size="lg"
        onClick={() => {
          addToCart({ ...product, count });
          setOpenCart(true);
          setCount(1);
        }}
      >
        <ShoppingCartIcon className="h-5 w-5 mr-2" />
        Add to cart
      </Button>
    </div>
  );
};

export default AddToCart;
