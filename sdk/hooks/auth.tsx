import { BaseMutationOptions, useMutation } from '@apollo/client';
import { mutations } from '../graphql/auth';
import { useSetAtom } from 'jotai';
import { refetchCurrentUserAtom } from '@/store/user.store';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const clientPortalId = process.env.NEXT_PUBLIC_CP_ID;

export const useOnLoginComplete = () => {
  const router = useRouter();
  const triggerRefetchUser = useSetAtom(refetchCurrentUserAtom);
  const onLoginComplete = ({
    token,
    refetchToken,
  }: {
    token?: string;
    refetchToken?: string;
  }) => {
    if (token) {
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('refetchToken', refetchToken || '');
      triggerRefetchUser(true);
      toast.success('Hello Dear', {
        description: 'You successfully logged in',
      });
      router.push('/');
    }
  };
  return { onLoginComplete };
};

export const useLogin = (onCompleted?: BaseMutationOptions['onCompleted']) => {
  const { onLoginComplete } = useOnLoginComplete();
  const [login, { loading }] = useMutation(mutations.login, {
    onCompleted: ({ clientPortalLogin }) => {
      onLoginComplete(clientPortalLogin);
      !!onCompleted && onCompleted(clientPortalLogin);
    },
    onError(error) {
      toast.error('Error', { description: error.message });
    },
  });

  return { login, loading, clientPortalId };
};

export const useRegister = (
  onCompleted?: BaseMutationOptions['onCompleted']
) => {
  const [register, { loading }] = useMutation(mutations.createUser, {
    onCompleted: (data) => {
      !!onCompleted && onCompleted(data);
    },
  });

  return { register, loading, clientPortalId };
};
