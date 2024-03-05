import { getOrderDetail } from '@/lib/utils';
import { useDetail } from './order-detail';

const OrderStatus = () => {
  const { status, paidDate } = useDetail();
  return <div>{getOrderDetail(status || '', paidDate)}</div>;
};

export default OrderStatus;
