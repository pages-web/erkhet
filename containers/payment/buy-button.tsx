import { Button } from '@/components/ui/button';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import Payment from './payment';

const BuyButton = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="lg" className="md:h-12 md:px-8">
          Төлбөр төлөх
        </Button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="md:h-[95vh] md:max-h-[768px] rounded-t-2xl"
      >
        <div className="relative">
          <SheetPrimitive.Close asChild>
            <Button
              className="absolute right-5 -top-1 rounded-full"
              variant="outline"
              size="icon"
            >
              <XIcon className="h-[1.125rem] w-[1.125rem]" />
            </Button>
          </SheetPrimitive.Close>
        </div>
        <div className="container max-w-5xl">
          <Payment />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BuyButton;
