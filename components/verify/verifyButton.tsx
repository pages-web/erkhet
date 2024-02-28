'use client';

import { Button } from '../ui/button';
import { useAtom, useAtomValue } from 'jotai';
import { activeOrderAtom, changeSaleStatusAtom } from '@/store/order.store';
import { useRouter } from 'next/navigation';
import { LoadingIcon } from '../ui/loading';
import { IOrder } from '@/types/order.types';
import { ORDER_SALE_STATUS } from '@/lib/constants';

const VerifyButton = () => {
  const { _id } = useAtomValue(activeOrderAtom) as IOrder;
  const router = useRouter();
  const [loading, changeStatus] = useAtom(changeSaleStatusAtom);

  const handleClick = () => {
    changeStatus(ORDER_SALE_STATUS.CONFIRMED);
    router.push(`/profile/orders/${_id}`);
  };

  return (
    <Button
      size="lg"
      className="w-full"
      disabled={loading}
      onClick={handleClick}
    >
      {loading && <LoadingIcon />}
      Төлбөр төлөх
    </Button>
  );
};

export default VerifyButton;
