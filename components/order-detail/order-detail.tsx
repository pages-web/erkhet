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
    throw new Error('useCounter must be used within a <Counter />');
  }

  return context;
}

const OrderDetail = ({ id }: { id: string }) => {
  const { loading, orderDetail } = useOrderDetail(id);

  if (loading) return <Loading className="py-32" />;

  return (
    <OrderDetailContext.Provider value={orderDetail}>
      <OrderHeader />
      <OrderGeneral {...orderDetail} />
      <OrderProducts {...orderDetail} />
      <OrderUser {...orderDetail} />
      <OrderAddress {...orderDetail} />
    </OrderDetailContext.Provider>
  );
};

export default OrderDetail;
