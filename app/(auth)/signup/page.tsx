import { Button } from '@/components/ui/button';
import RegisterForm from '@/containers/auth/register-form';
import Link from 'next/link';

const SignUp = () => {
  return (
    <>
      <div className="text-lg md:text-2xl font-semibold mx-auto relative">
        Бүртгүүлэх
      </div>
      <div className="mb-auto mx-auto mt-4 md:mt-8 w-full sm:max-w-lg">
        <div className="md:border md:rounded-xl w-full sm:py-10 px-3 sm:px-10 space-y-5  bg-white">
          <RegisterForm />
        </div>
        <div className="my-4 md:my-8 text-center text-sm relative">
          <Button variant="link" className="text-sm" asChild>
            <Link href="/login">Нэвтрэх?</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
