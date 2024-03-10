'use client';
import { cartLengthAtom } from '@/store/cart.store';
import { useAtomValue } from 'jotai';

const CartCount = () => {
  const length = useAtomValue(cartLengthAtom);
  return <span suppressHydrationWarning>{length}</span>;
};

export default CartCount;
