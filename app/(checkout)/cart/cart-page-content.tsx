'use client';

import CartProductList from '@/components/cart-product-list/cart-product-list';
import CartEmpty from '@/components/cart/cart-empty';
import { cartLengthAtom } from '@/store/cart.store';
import { initialLoadingOrderAtom, loadingOrderAtom } from '@/store/order.store';
import { useAtomValue } from 'jotai';
import { Loader2Icon } from 'lucide-react';

const CartPageContent = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <span className="col-span-7 mb-10 md:mb-0">
        <CartProductList />
      </span>
      {children}
    </>
  );
};

export default CartPageContent;
