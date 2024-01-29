import { BaseMutationOptions, useMutation } from '@apollo/client';
import { mutations } from '../graphql/auth';

const clientPortalId = process.env.NEXT_PUBLIC_CP_ID;

export const useLogin = (onCompleted?: BaseMutationOptions['onCompleted']) => {
  const [login, { loading }] = useMutation(mutations.login, {
    onCompleted: (data) => {
      !!onCompleted && onCompleted(data);
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
