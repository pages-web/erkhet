'use client';

import { useOrderDetail } from '@/sdk/queries/order';
import OrderAddress from './order-address';
import OrderGeneral from './order-general';
import OrderHeader from './order-header';
import OrderProducts from './order-products';
import OrderUser from './order-user';
import { Loading } from '../ui/loading';

const OrderDetail = ({ id }: { id: string }) => {
  const { loading, orderDetail } = useOrderDetail(id);

  if (loading) return <Loading />;

  return (
    <>
      <OrderHeader {...orderDetail} />
      <OrderGeneral {...orderDetail} />
      <OrderProducts {...orderDetail} />
      <OrderUser {...orderDetail} />
      <OrderAddress {...orderDetail} />
    </>
  );
};

export default OrderDetail;
