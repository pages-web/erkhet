import { XIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from '../ui/image';
import { type Atom, useAtomValue, useSetAtom } from 'jotai';
import { OrderItem } from '@/types/order.types';
import Price from '../price/price';
import { Counter, CounterButton, CounterInput } from '../counter/counter';
import { updateCartAtom } from '@/store/cart.store';

const CartItem = ({
  cartItemAtom,
  setOpenSheet,
}: {
  cartItemAtom: Atom<OrderItem>;
  setOpenSheet: (open: boolean) => void;
}) => {
  const { _id, productName, unitPrice, count } = useAtomValue(cartItemAtom);
  const changeCartItem = useSetAtom(updateCartAtom);
  return (
    <li className="flex w-full flex-col border-b border-neutral-300">
      <div className="relative flex w-full flex-row justify-between px-1 py-4">
        <div className="absolute z-40 -mt-2 ml-[55px]">
          <Button
            size="sm"
            className="h-5 px-1 rounded-full"
            onClick={() => changeCartItem({ _id, count: 0 })}
          >
            <XIcon className="h-3 w-3" />
          </Button>
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
        <div className="flex h-16 flex-col justify-between">
          <Price
            className="flex justify-end space-y-2 text-right text-sm"
            amount={unitPrice + ''}
          />
          <Counter size="sm">
            <CounterButton
              minus
              onClick={() => changeCartItem({ _id, count: count - 1 })}
            />
            <CounterInput value={count} />
            <CounterButton
              onClick={() => changeCartItem({ _id, count: count + 1 })}
            />
          </Counter>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
