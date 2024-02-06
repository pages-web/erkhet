'use client';

import { Button } from '@/components/ui/button';
import useCurrentOrder from '@/sdk/queries/order';
import { Loader2Icon } from 'lucide-react';

const CurrentOrder = () => {
  const { loading } = useCurrentOrder();
  return (
    <Button className="fixed left-6 bottom-6 rounded-full" size="icon">
      {loading && <Loader2Icon className="h-5 w-5 animate-spin" />}
    </Button>
  );
};

export default CurrentOrder;
