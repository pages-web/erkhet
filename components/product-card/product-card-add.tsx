'use client';

import { Loader2Icon, ShoppingCartIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { useAtom, useSetAtom } from 'jotai';
import { addToCartAtom } from '@/store/cart.store';
import { IProduct } from '@/types/product.types';
import { toast } from 'sonner';
import { cartSheetAtom } from '@/store';
import { useEffect, useState } from 'react';

const ProductCardAdd = (product: IProduct) => {
  const [loading, addToCart] = useAtom(addToCartAtom);
  const [clicked, setClicked] = useState(false);
  const openCart = useSetAtom(cartSheetAtom);

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
  }, [clicked]);

  return (
    <Button
      size="sm"
      className="font-bold"
      disabled={loading}
      onClick={() => {
        addToCart({ ...product, count: 1 });
        setClicked(true);
      }}
    >
      <ShoppingCartIcon className="h-4 w-4 mr-1" strokeWidth={2.5} />
      Add
    </Button>
  );
};

export default ProductCardAdd;
