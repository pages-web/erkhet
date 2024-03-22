'use client';

import { Loading } from '@/components/ui/loading';
import { useFullOrders } from '@/sdk/queries/order';
import OrderItem from '@/components/profile/order/order-item';
import { IOrder } from '@/types/order.types';
import CartEmpty from '@/components/cart/cart-empty';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const FullOrders = () => {
  const refetchOrders = useSearchParams().get('refetch') === 'true';
  const router = useRouter();
  const { fullOrders, loading, refetch } = useFullOrders();

  useEffect(() => {
    if (refetchOrders) {
      refetch();
      router.push('/profile/orders');
    }
  }, []);

  if (loading) return <Loading className="py-40" />;

  if (!fullOrders?.length)
    return (
      <div className="py-12 flex-col flex items-center">
        <CartEmpty />
        <div>Танд захиалга алга</div>
      </div>
    );

  return (
    <>
      {fullOrders.map((order: IOrder) => (
        <OrderItem {...(order || {})} key={order._id} />
      ))}
    </>
  );
};

export default FullOrders;
