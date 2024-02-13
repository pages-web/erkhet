import Price from '@/components/price/price';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from '@/components/ui/image';
import Link from 'next/link';

const OrderItem = () => {
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
            <h2 className="md:text-base">20230212.0001</h2>
          </div>
          <div className="text-right md:text-left space-y-0.5 w-7/12">
            <div className="text-black/60">2023/11/27 20:11</div>
            <div className="text-wrap">Захиалга хүчингүй болсон</div>
          </div>
        </div>
        <div className="flex flex-row-reverse md:w-3/12 justify-end md:justify-center">
          <Avatar className="h-12 w-12 border-2">
            <Image src={'/images/product.webp'} height={60} width={60} alt="" />
            <AvatarFallback />
          </Avatar>
          <Avatar className="h-12 w-12 -mr-3 border-2">
            <Image src={'/images/product.webp'} height={60} width={60} alt="" />
            <AvatarFallback />
          </Avatar>
          <Avatar className="h-12 w-12 -mr-3 border-2">
            <Image src={'/images/product.webp'} height={60} width={60} alt="" />
            <AvatarFallback />
          </Avatar>
        </div>
        <div className="text-right md:w-2/12 md:mr-4">
          <div className="text-black/60">Total Amount</div>
          <Price className=" text-base" amount="75000" />
        </div>
      </Link>
    </Button>
  );
};

export default OrderItem;
