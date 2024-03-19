'use client';

import { ShoppingCartIcon } from 'lucide-react';
import { Counter, CounterButton, CounterInput } from '../counter/counter';
import { Button } from '../ui/button';
import { useState } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import { addToCartAtom } from '@/store/cart.store';
import { IProduct } from '@/types/product.types';
import { cartSheetAtom } from '@/store';
import { LoadingIcon } from '../ui/loading';
import { usePossibleQuantity } from '@/sdk/hooks/cart';

const AddToCart = (product: IProduct) => {
  const [count, setCount] = useState(1);
  const [loading, addToCart] = useAtom(addToCartAtom);
  const setOpenCart = useSetAtom(cartSheetAtom);
  const { checkRemainder, possibleQuantity, disableActions } =
    usePossibleQuantity(product);

  return (
    <div className="py-4 flex items-center gap-4">
      <Counter size="lg" disabled={disableActions}>
        <CounterButton
          minus
          onClick={() => setCount(prev => (prev > 1 ? prev - 1 : 1))}
        />
        <CounterInput
          value={count}
          onChange={e => setCount(Number(e.target.value))}
        />
        <CounterButton
          onClick={() =>
            setCount(prev =>
              !checkRemainder
                ? prev + 1
                : possibleQuantity > prev + 1
                ? prev + 1
                : possibleQuantity
            )
          }
        />
      </Counter>
      <Button
        className="h-11 flex-1 font-semibold"
        size="lg"
        onClick={() => {
          addToCart({ ...product, count });
          setOpenCart(true);
          setCount(possibleQuantity > 0 ? 1 : 0);
        }}
        disabled={disableActions || loading}
      >
        {loading ? (
          <LoadingIcon />
        ) : (
          <ShoppingCartIcon className="h-5 w-5 mr-2" />
        )}
        Add to cart
      </Button>
    </div>
  );
};

export default AddToCart;
