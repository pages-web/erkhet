import { useAtom, useAtomValue } from 'jotai';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle
} from '../ui/sheet';
import { cartSheetAtom } from '@/store';
import { Button } from '../ui/button';
import { XIcon } from 'lucide-react';
import Link from 'next/link';

import Price from '../price/price';
import { cartItemAtomAtoms } from '@/store/cart.store';
import CartItem from './cart-item';
import CartTotal from './cart-total';
import CartEmpty from './cart-empty';

const Cart = () => {
  const [openSheet, setOpenSheet] = useAtom(cartSheetAtom);
  const cart = useAtomValue(cartItemAtomAtoms);

  return (
    <Sheet open={openSheet} onOpenChange={op => setOpenSheet(op)}>
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
        {cart.length > 0 ? (
          <>
            <div className="flex-1">
              {cart.map(cartItemAtom => (
                <CartItem
                  key={`${cartItemAtom}`}
                  cartItemAtom={cartItemAtom}
                  setOpenSheet={setOpenSheet}
                />
              ))}
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">
              <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1">
                <p>Shipping</p>
                <p className="text-right">Calculated at checkout</p>
              </div>
              <div className="flex items-center justify-between border-b border-neutral-200 pb-1 pt-1">
                <p>Total</p>
                <CartTotal />
              </div>
            </div>
            <Button size="lg" asChild onClick={() => setOpenSheet(false)}>
              <Link href={'/cart'}>Proceed to Checkout</Link>
            </Button>
          </>
        ) : (
          <div className="flex-1 flex flex-col justify-center items-center gap-6">
            <div className="h-28 w-28">
              <CartEmpty />
            </div>
            <p className="font-semibold">Your cart is empty</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
