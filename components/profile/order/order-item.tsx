import Price from '@/components/price/price';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Image, { cloudflareLoader } from '@/components/ui/image';
import { IOrder } from '@/types/order.types';
import Link from 'next/link';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const OrderItem = ({ number, totalAmount, createdAt, items }: IOrder) => {
  return (
    <Button
      variant="outline"
      className="w-full h-auto md:h-24 justify-between gap-3 md:gap-6 shadow-none flex-wrap md:flex-nowrap py-4 px-4 md:px-6 md:py-0"
      size={'lg'}
      asChild
    >
      <Link href={`/profile/orders/1`}>
        <div className="flex flex-1 items-start md:items-center">
          <div className="text-left space-y-0.5 w-5/12">
            <div className="text-black/60">Code</div>
            <h2 className="md:text-base">{number}</h2>
          </div>
          <div className="text-right md:text-left space-y-0.5 w-7/12">
            <div className="text-black/60">
              {format(createdAt, 'yyyy/MM/dd hh:mm')}
            </div>
            <div className="text-wrap">Захиалга хүчингүй болсон</div>
          </div>
        </div>
        <div className="flex flex-row-reverse md:w-3/12 justify-end">
          {items.map((item, index) => (
            <Avatar
              className={cn('h-12 w-12 border-2', index > 0 && '-mr-3')}
              key={item.productName}
            >
              <AvatarImage
                src={cloudflareLoader({
                  src: item.productImgUrl || '',
                  width: 60,
                  quality: 100
                })}
              />
              <AvatarFallback>
                {(item.productName || '').toUpperCase()[0]}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
        <div className="text-right md:w-2/12 md:mr-4">
          <div className="text-black/60">Total Amount</div>
          <Price className=" text-base" amount={totalAmount + ''} />
        </div>
      </Link>
    </Button>
  );
};

export default OrderItem;
