import { memo } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Image from '@/components/ui/image';
import { RadioGroupItem } from '@/components/ui/radio-group';

export interface IPaymentOption {
  _id: string;
  name: string;
  kind: string;
  //   config: {
  //     [key: string]: string;
  //   };
}

const PaymentType = ({
  selected,
  _id,
  kind,
  name
}: IPaymentOption & { selected: boolean }) => {
  return (
    <div className="relative">
      <Button
        variant="outline"
        className={cn(
          'h-auto flex-col py-6 gap-1 group rounded-2xl w-full border-2 ease-in duration-150 transition-colors',
          selected && 'bg-primary/10 hover:bg-primary/10  border-primary'
        )}
        asChild
      >
        <div>
          <RadioGroupItem value={kind} id={kind} className="hidden" />

          <Image
            src={`/images/payments/${kind}.png`}
            alt="storepay"
            className="object-contain rounded-lg mb-0.5"
            height={48}
            width={48}
          />
          <div className="flex-auto text-left">
            <div className={cn('font-medium')}>{name}</div>
          </div>
          <label
            className={cn('absolute inset-0 rounded-2xl  cursor-pointer')}
            htmlFor={kind}
          />
        </div>
      </Button>
    </div>
  );
};

export default memo(PaymentType);
