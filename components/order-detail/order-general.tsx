import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import { Separator } from '../ui/separator';
import { format } from 'date-fns';
import Price from '../price/price';
import { useDetail } from './order-detail';

const OrderGeneral = () => {
  const { number, createdAt, totalAmount } = useDetail();
  return (
    <Card>
      <CardHeader className="justify-between flex-row items-center md:py-3 space-y-0 md:space-y-2">
        <div>
          <div className="text-sm text-black/60 font-medium text-nowrap">
            Захиалгын дугаар
          </div>
          <div className="font-semibold md:font-bold text-base md:text-lg">
            {number}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-black/60 font-medium text-nowrap">
            Захиалга хийсэн огноо
          </div>
          <div className="font-semibold md:font-bold text-base md:text-lg">
            {format(createdAt, 'yyyy/MM/dd hh:mm')}
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="py-3 md:py-4 text-sm md:text-base">
        <div className="flex justify-between items-center">
          <span>Барааны дүн</span>
          <Price amount={totalAmount + ''} />
        </div>
        <div className="flex justify-between items-center">
          <span>Хүргэлтийн төлбөр</span>
          <Price amount={'0'} />
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="justify-between py-3 md:py-4 font-bold text-base md:text-lg text-nowrap">
        <div>Нийт төлөх дүн</div>
        <Price amount={totalAmount + ''} />
      </CardFooter>
    </Card>
  );
};

export default OrderGeneral;
