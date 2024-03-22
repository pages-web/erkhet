'use client';

import { ShoppingCartIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { useAtom, useSetAtom } from 'jotai';
import { addToCartAtom } from '@/store/cart.store';
import { IProduct } from '@/types/product.types';
import { toast } from 'sonner';
import { cartSheetAtom } from '@/store';
import { useEffect, useState } from 'react';
import { usePossibleQuantity } from '@/sdk/hooks/cart';

const ProductCardAdd = (product: IProduct) => {
  const [loading, addToCart] = useAtom(addToCartAtom);
  const [clicked, setClicked] = useState(false);
  const openCart = useSetAtom(cartSheetAtom);
  const { checkRemainder, possibleQuantity, disableActions } =
    usePossibleQuantity(product);

  useEffect(() => {
    if (clicked) {
      if (!loading) {
        toast.success('Product added to cart', {
          description: `${
            product.name
          } (${product?.unitPrice?.toLocaleString()})`,
          action: {
            label: 'View',
            onClick: () => {
              openCart(true);
              toast.dismiss();
            }
          }
        });
        setClicked(false);
      }
    }
  }, [clicked, loading]);

  const handleClick = () => {
    if (!checkRemainder || possibleQuantity > 0) {
      addToCart({ ...product, count: 1 });
      setClicked(true);
    }
  };

  return (
    <Button
      size="sm"
      className="font-bold"
      disabled={loading || disableActions}
      onClick={handleClick}
    >
      <ShoppingCartIcon className="h-4 w-4 mr-1" strokeWidth={2.5} />
      Сагслах
    </Button>
  );
};

export default ProductCardAdd;
