'use client';

import CartProductList from '@/components/cart-product-list/cart-product-list';

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
