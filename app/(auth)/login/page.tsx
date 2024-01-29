import { Button } from '@/components/ui/button';
import LoginForm from '@/containers/auth/login-form';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

const Login = () => {
  return (
    <>
      <div className="text-2xl font-semibold mx-auto relative md:mt-20">
        Тавтай морил
      </div>
      <div className="mb-auto mx-auto mt-8 w-full sm:max-w-md">
        <div className="border rounded-xl w-full max-w-md py-10 px-8 sm:px-10 bg-white relative">
          <LoginForm />
        </div>
      </div>
      <div className="mt-8 text-center text-sm relative md:mb-20">
        <Button variant="link" className="text-sm" asChild>
          <Link href="/signup">Бүртгэл үүсгэх?</Link>
        </Button>
      </div>
    </>
  );
};

export default Login;
