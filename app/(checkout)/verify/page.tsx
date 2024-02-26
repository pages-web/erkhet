import OrderSummary from '@/components/order-summary/order-summary';
import CheckoutLayout from '../checkout-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ItemsSummary from '@/components/verify/items-summary';
import ItemsGrid from '@/components/verify/items-grid';
import VerifyAddress from '@/components/verify/verify-address';

const Verify = () => {
  return (
    <CheckoutLayout title="Баталгаажуулах" backTitle="Back" backUrl="/address">
      <div className="md:grid md:grid-cols-12 md:gap-x-6">
        <div className="col-span-7">
          <div className="text-black/60 ">Захиалга</div>
          <ItemsGrid />
          <Separator />
          <VerifyAddress />
        </div>
        <OrderSummary
          className="col-span-5 md:sticky md:top-20 h-fit"
          content={<ItemsSummary />}
        >
          <Button asChild size="lg" className="w-full">
            <Link href="/address">Төлбөр төлөх</Link>
          </Button>
        </OrderSummary>
      </div>
    </CheckoutLayout>
  );
};

export default Verify;
