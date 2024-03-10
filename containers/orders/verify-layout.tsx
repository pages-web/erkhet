'use client';

import { useAtomValue } from 'jotai';
import { descriptionAtom } from '@/store/order.store';
import { ArrowLeftIcon, MapPinOffIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const VerifyLayout = ({ children }: React.PropsWithChildren) => {
  const description = useAtomValue(descriptionAtom);

  if (!description)
    return (
      <div className="flex items-center justify-center flex-col pt-24 pb-32 col-span-12">
        <MapPinOffIcon className="h-12 w-12" strokeWidth={1.3} />
        <h2 className="mt-8 text-xl sm:text-2xl font-bold">Address is empty</h2>
        <Button variant="secondary" className="mt-4" asChild>
          <Link href={'/address'}>
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Address
          </Link>
        </Button>
      </div>
    );

  return <>{children}</>;
};

export default VerifyLayout;
