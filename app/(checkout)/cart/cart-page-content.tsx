'use client';

import CartProductList from '@/components/cart-product-list/cart-product-list';
import CartEmpty from '@/components/cart/cart-empty';
import { cartLengthAtom } from '@/store/cart.store';
import { useAtomValue } from 'jotai';

const CartPageContent = ({ children }: React.PropsWithChildren) => {
  const cartLength = useAtomValue(cartLengthAtom);

  if (!cartLength)
    return (
      <div className="flex items-center justify-center flex-col pt-24 pb-32 col-span-12">
        <div className="w-48 h-48">
          <CartEmpty />
        </div>
        <h2 className="mt-8 text-xl sm:text-2xl font-bold">
          Your cart is empty
        </h2>
      </div>
    );

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
