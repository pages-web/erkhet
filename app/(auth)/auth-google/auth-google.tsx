'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Loading } from '@/components/ui/loading';
import { useGoogleLogin } from '@/sdk/hooks/auth';

const AuthGoogle = () => {
  const code = useSearchParams().get('code');
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
  }, [code, googleLogin]);

  return <Loading className="py-20" />;
};

export default AuthGoogle;
