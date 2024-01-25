import { useAtom } from 'jotai';
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
import Image from '../ui/image';
import Price from '../price/price';
import { Counter, CounterButton, CounterInput } from '../counter/counter';
import { Input } from '../ui/input';

const Cart = () => {
  const [openSheet, setOpenSheet] = useAtom(cartSheetAtom);
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
          <li className="flex w-full flex-col border-b border-neutral-300">
            <div className="relative flex w-full flex-row justify-between px-1 py-4">
              <div className="absolute z-40 -mt-2 ml-[55px]">
                <Button size="sm" className="h-5 px-1 rounded-full">
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
                  <span className="leading-tight">Mornig crgz afds</span>
                </div>
              </Link>
              <div className="flex h-16 flex-col justify-between">
                <Price
                  className="flex justify-end space-y-2 text-right text-sm"
                  amount={'300'}
                />
                <Counter size="sm">
                  <CounterButton minus />
                  <CounterInput />
                  <CounterButton />
                </Counter>
              </div>
            </div>
          </li>
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
