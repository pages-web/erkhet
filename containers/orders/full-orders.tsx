'use client';

import { Loading } from '@/components/ui/loading';
import { useFullOrders } from '@/sdk/queries/order';
import OrderItem from '@/components/profile/order/order-item';
import { IOrder } from '@/types/order.types';
import CartEmpty from '@/components/cart/cart-empty';

const FullOrders = () => {
  const { fullOrders, loading } = useFullOrders();

  if (loading) return <Loading className="py-40" />;

  if (!fullOrders?.length) return <CartEmpty />;

  return (
    <>
      {fullOrders.map((order: IOrder) => (
        <OrderItem {...(order || {})} key={order._id} />
      ))}
    </>
  );
};

export default FullOrders;
