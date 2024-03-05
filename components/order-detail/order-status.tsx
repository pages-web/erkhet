import { getOrderStatus } from '@/lib/utils';
import { useDetail } from './order-detail';

const OrderStatus = () => {
  const { status, paidDate } = useDetail();
  return <div>{getOrderStatus(status || '', paidDate)}</div>;
};

export default OrderStatus;
