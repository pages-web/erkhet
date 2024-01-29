'use client';

import useCurrentOrder from '@/sdk/queries/order';

const CurrentOrder = () => {
  const { currentOrder } = useCurrentOrder();
  return null;
};

export default CurrentOrder;
