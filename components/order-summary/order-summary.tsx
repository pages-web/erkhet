import CartCount from '../cart/cart-count';
import CartTotal from '../cart/cart-total';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '../ui/card';
import { Separator } from '../ui/separator';
import DeliveryFee from './delivery-fee';

const OrderSummary = ({
  className,
  children,
  content
}: React.PropsWithChildren & {
  className?: string;
  content?: React.ReactNode;
}) => {
  return (
    <Card className={className}>
      <CardHeader className="flex-row space-y-0 justify-between items-center md:py-4">
        <CardTitle className="md:text-lg">Төлбөрийн мэдээлэл</CardTitle>
        <div className="font-semibold">
          (Бүтээгдэхүүн: <CartCount />)
        </div>
      </CardHeader>
      <CardContent className="py-0 md:py-0 space-y-2">
        {!!content && (
          <div>
            <Separator />
            <div className="py-3 space-y-1">{content}</div>
            <Separator />
          </div>
        )}
        <DeliveryFee />
      </CardContent>
      <CardFooter className="flex-col gap-4 md:pb-6 md:pt-3">
        <Separator />
        <div className="text-lg md:text-xl font-bold flex justify-between w-full">
          <p>Нийт төлөх дүн</p>
          <CartTotal />
        </div>
        <Separator />
        {children}
      </CardFooter>
    </Card>
  );
};

export default OrderSummary;
