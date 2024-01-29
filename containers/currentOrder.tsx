'use client';

import useCurrentOrder from '@/sdk/queries/order';

const CurrentOrder = () => {
  useCurrentOrder();
  return null;
};

export default CurrentOrder;
