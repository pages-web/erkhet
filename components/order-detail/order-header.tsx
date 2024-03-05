import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import { Separator } from '../ui/separator';
import { Alert } from '../ui/alert';
import CancelOrder from '@/containers/orders/cancel-order';
import BuyButton from '@/containers/payment/buy-button';
import { IOrder } from '@/types/order.types';
import OrderStatus from './order-status';

const OrderHeader = () => {
  return (
    <Card>
      <CardHeader className="justify-between flex-row items-center md:py-5 gap-1 md:gap-0">
        <h3 className="text-base text-nowrap md:text-xl font-semibold">
          Захиалгын мэдээлэл
        </h3>
        <div className="text-sm font-medium w-full md:w-auto text-right">
          {/* <div className="text-black/60 md:mb-1 md:text-right">
            Төлбөр төлөх хугацаа
          </div>
          <div>
            <span className="font-bold text-sm">01</span> өдөр:
            <span className="font-bold text-sm ml-1">23</span> цаг:
            <span className="font-bold text-sm ml-1">54</span> минут
          </div> */}
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="px-2">
        <h4 className="text-lg md:text-xl font-medium text-center my-5 md:mt-0">
          <OrderStatus />
        </h4>
        <Alert variant="warning" className="md:font-medium text-black">
          Төлбөр төлөгдсөний дараа таны захиалга баталгаажихыг анхаарна уу!
          Дээрх хугацаанд төлбөрөө төлөөгүй тохиолдолд таны захиалга автоматаар
          цуцлагдана.
        </Alert>
      </CardContent>
      <Separator />
      <CardFooter className="justify-between pt-4 md:py-4">
        <CancelOrder />
        <BuyButton />
      </CardFooter>
    </Card>
  );
};

export default OrderHeader;
