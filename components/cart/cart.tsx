import { useAtom, useAtomValue } from 'jotai';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet';
import { cartSheetAtom } from '@/store';
import { Button } from '../ui/button';
import { XIcon } from 'lucide-react';
import Link from 'next/link';

import Price from '../price/price';
import { cartAtom, cartItemAtomAtoms } from '@/store/cart.store';
import CartItem from './cart-item';

const Cart = () => {
  const [openSheet, setOpenSheet] = useAtom(cartSheetAtom);
  const cart = useAtomValue(cartItemAtomAtoms);

  return (
    <Sheet open={openSheet} onOpenChange={(op) => setOpenSheet(op)}>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex-row justify-between items-center space-y-0">
          <SheetTitle>My Cart</SheetTitle>
          <SheetClose asChild>
            <Button variant="ghost" size={'icon'} className="-mr-2">
              <XIcon className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </SheetClose>
        </SheetHeader>
        <div className="flex-1">
          {cart.map((cartItemAtom) => (
            <CartItem
              key={`${cartItemAtom}`}
              cartItemAtom={cartItemAtom}
              setOpenSheet={setOpenSheet}
            />
          ))}
        </div>
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1">
            <p>Taxes</p>
            <Price
              className="text-right text-base text-black dark:text-white"
              amount={'10000'}
            />
          </div>
          <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1">
            <p>Shipping</p>
            <p className="text-right">Calculated at checkout</p>
          </div>
          <div className="flex items-center justify-between border-b border-neutral-200 pb-1 pt-1">
            <p>Total</p>
            <Price
              className="text-right text-base text-black dark:text-white"
              amount={'15000'}
            />
          </div>
        </div>
        <Button size="lg" asChild onClick={() => setOpenSheet(false)}>
          <Link href={'/cart'}>Proceed to Checkout</Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
