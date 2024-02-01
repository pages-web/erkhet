'use client';

import { cartItemAtomAtoms } from '@/store/cart.store';
import { useAtomValue } from 'jotai';
import CartProductCard from '../cart-product-card/cart-product-card';

const CartProductList = () => {
  const cart = useAtomValue(cartItemAtomAtoms);
  return (
    <>
      {cart.map(cartItemAtom => (
        <CartProductCard key={`${cartItemAtom}`} cartItemAtom={cartItemAtom} />
      ))}
    </>
  );
};

export default CartProductList;
