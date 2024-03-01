'use client';

import { Button } from '../ui/button';
import { useAtomValue } from 'jotai';
import { activeOrderAtom } from '@/store/order.store';
import { useRouter } from 'next/navigation';
import { LoadingIcon } from '../ui/loading';
import { IOrder } from '@/types/order.types';
import { useOrderChangeSaleStatus } from '@/sdk/hooks/order';

const VerifyButton = () => {
  const { _id } = useAtomValue(activeOrderAtom) as IOrder;
  const router = useRouter();
  const { handleConfirm, loading } = useOrderChangeSaleStatus();

  const handleClick = () =>
    handleConfirm(() => router.push(`/profile/orders/${_id}`));

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
