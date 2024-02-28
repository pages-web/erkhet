import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '../ui/separator';
import OrderProduct from '../profile/order/order-product';
import { IOrder } from '@/types/order.types';

const OrderProducts = ({ items }: IOrder) => {
  return (
    <Card>
      <CardHeader className="md:py-4">
        <CardTitle className="text-lg font-semibold">Бүтээгдэхүүнүүд</CardTitle>
      </CardHeader>
      <Separator />
      {items.map(i => (
        <OrderProduct {...i} key={i._id} />
      ))}
    </Card>
  );
};

export default OrderProducts;
