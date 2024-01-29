import { Button } from '@/components/ui/button';
import RegisterForm from '@/containers/auth/register-form';
import Link from 'next/link';

const SignUp = () => {
  return (
    <>
      <div className="text-2xl font-semibold mx-auto relative">Бүртгүүлэх</div>
      <div className="mb-auto mx-auto mt-8 w-full sm:max-w-lg">
        <div className="border rounded-xl w-full py-10 px-8 sm:px-10 bg-white space-y-5">
          <RegisterForm />
        </div>
        <div className="my-8 text-center text-sm relative">
          <Button variant="link" className="text-sm" asChild>
            <Link href="/login">Нэвтрэх?</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
