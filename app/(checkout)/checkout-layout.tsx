import { Button } from '@/components/ui/button';
import PrivateRoute from '@/containers/auth/private-route';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

const CheckoutLayout = ({
  children,
  title,
  backTitle,
  backUrl
}: React.PropsWithChildren & {
  title: string;
  backTitle: string;
  backUrl: string;
}) => {
  return (
    <div className="container pb-20">
      <PrivateRoute>
        <div className="flex justify-between mt-8 mb-10">
          <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
          <Button size="lg" variant="secondary" asChild>
            <Link href={backUrl}>
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              {backTitle}
            </Link>
          </Button>
        </div>
        <div className="md:grid md:grid-cols-12 md:gap-x-6">{children}</div>
      </PrivateRoute>
    </div>
  );
};

export default CheckoutLayout;
