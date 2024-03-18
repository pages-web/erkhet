import { Button } from '@/components/ui/button';
import ForgotForm from '@/containers/auth/forgot-form';
import { getConfig } from '@/sdk/queries/auth';
import { Metadata } from 'next/types';
import Link from 'next/link';
import { Suspense } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  const { config } = await getConfig();

  return {
    title: config.name + ' - Нууц үг сэргээх',
    openGraph: {
      title: config.name + ' - Нууц үг сэргээх'
    }
  };
}

const Forgot = () => {
  return (
    <>
      <div className="text-lg md:text-2xl font-semibold mx-auto relative md:mt-20">
        Нууц үг сэргээх
      </div>
      <div className="mb-auto mx-auto mt-4 md:mt-8 w-full sm:max-w-md">
        <div className="md:border md:rounded-xl w-full sm:py-10 px-3 sm:px-10 space-y-5 bg-background">
          <Suspense>
            <ForgotForm />
          </Suspense>
        </div>
      </div>
      <div className="mt-8 text-center text-sm relative md:mb-20">
        <Button variant="link" className="text-sm" asChild>
          <Link href="/signup">Нэвтрэх?</Link>
        </Button>
      </div>
    </>
  );
};

export default Forgot;
