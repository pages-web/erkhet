import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '../ui/separator';
import OrderProduct from '../profile/order/order-product';
import { useDetail } from './order-detail';

const OrderProducts = () => {
  const { items } = useDetail();
  return (
    <Card>
      <CardHeader className="md:py-4">
        <CardTitle className="text-lg font-semibold">Бүтээгдэхүүнүүд</CardTitle>
      </CardHeader>
      <Separator />
      {items.map(item => (
        <OrderProduct {...item} key={item._id} />
      ))}
    </Card>
  );
};

export default OrderProducts;
