import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Loading } from '@/components/ui/loading';
import { useGoogleLogin } from '@/sdk/hooks/auth';

const AuthGoogle = () => {
  const router = useRouter();
  const { code } = router.query;

  const { googleLogin, clientPortalId } = useGoogleLogin();

  useEffect(() => {
    if (code) {
      googleLogin({
        variables: {
          code,
          clientPortalId
        }
      });
    }
  }, [code, googleLogin, router]);

  return <Loading className="py-20" />;
};

export default AuthGoogle;
