import Link from 'next/link';
import Image from '../ui/image';
import { type Atom, useAtomValue, useSetAtom } from 'jotai';
import { OrderItem } from '@/types/order.types';
import { selectAtom } from 'jotai/utils';
import CartItemDelete from './cart-item-delete';
import CartItemCounter from './cart-item-counter';
import { useCallback, useMemo } from 'react';

const CartItem = ({
  cartItemAtom,
  setOpenSheet,
}: {
  cartItemAtom: Atom<OrderItem>;
  setOpenSheet: (open: boolean) => void;
}) => {
  const { _id, productName, unitPrice, count } = useAtomValue(cartItemAtom);

  return (
    <li className="flex w-full flex-col border-b border-neutral-300">
      <div className="relative flex w-full flex-row justify-between px-1 py-4">
        <div className="absolute z-40 -mt-2 ml-[55px]">
          <CartItemDelete _id={_id} />
        </div>
        <Link
          href="/"
          onClick={() => setOpenSheet(false)}
          className="z-30 flex flex-row space-x-4"
        >
          <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <Image
              className="h-full w-full object-cover"
              width={64}
              height={64}
              alt={''}
              src={''}
            />
          </div>

          <div className="flex flex-1 flex-col text-sm">
            <span className="leading-tight">{productName}</span>
          </div>
        </Link>
        <CartItemCounter unitPrice={unitPrice} _id={_id} count={count} />
      </div>
    </li>
  );
};

export default CartItem;