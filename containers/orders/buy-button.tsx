import { Button } from '@/components/ui/button';
import { RadioGroup } from '@/components/ui/radio-group';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import PaymentType from './paymentType';
import { useState } from 'react';

const BuyButton = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
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
          <h2 className="font-medium text-lg text-black/80 mb-8">
            Төлбөрийн төрлөө сонгоно уу
          </h2>
          <RadioGroup>
            <div className="space-y-3">
              <div className="grid grid-cols-4 gap-4">
                <PaymentType
                  selected={selectedPayment === 'qpay'}
                  kind={'qpay'}
                  _id={'3'}
                  name={'Qpay'}
                />
                <PaymentType
                  selected={selectedPayment === 'storepay'}
                  kind={'storepay'}
                  _id={'3'}
                  name={'Storepay'}
                />
                <PaymentType
                  selected={false}
                  kind={'pocket'}
                  _id={'3'}
                  name={'Pocket'}
                />
                <PaymentType
                  selected={false}
                  kind={'socialpay'}
                  _id={'3'}
                  name={'Socialpay'}
                />
                <PaymentType
                  selected={false}
                  kind={'monpay'}
                  _id={'3'}
                  name={'Monpay'}
                />
              </div>
            </div>
          </RadioGroup>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BuyButton;
