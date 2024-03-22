'use client';

import { useOrderDetail } from '@/sdk/queries/order';
import OrderAddress from './order-address';
import OrderGeneral from './order-general';
import OrderHeader from './order-header';
import OrderProducts from './order-products';
import OrderUser from './order-user';
import { Loading } from '../ui/loading';
import { IOrder } from '@/types/order.types';
import { createContext, useContext } from 'react';

const OrderDetailContext = createContext<IOrder | null>(null);

export function useDetail() {
  const context = useContext(OrderDetailContext);

  if (!context) {
    throw new Error('useDetail must be used within a <OrderDetail />');
  }

  return context;
}

const OrderDetail = ({ id }: { id: string }) => {
  const { loading, orderDetail } = useOrderDetail(id);

  if (loading) return <Loading className="py-32" />;

  if (!orderDetail)
    return <div className="py-32 text-center">Захиалга олдсонгүй</div>;

  return (
    <OrderDetailContext.Provider value={orderDetail}>
      <OrderHeader />
      <OrderGeneral />
      <OrderProducts />
      <OrderUser />
      <OrderAddress />
    </OrderDetailContext.Provider>
  );
};

export default OrderDetail;
