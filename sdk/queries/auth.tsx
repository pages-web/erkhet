import { useQuery } from '@apollo/client';
import { queries } from '@/sdk/graphql/auth';
import { useSetAtom } from 'jotai';
import { currentUserAtom } from '@/store/user.store';

export const useCurrentUser = () => {
  const setCurrentUser = useSetAtom(currentUserAtom);
  const { data, loading } = useQuery(queries.currentUser, {
    onCompleted({ currentUser }) {
      setCurrentUser(currentUser);
    },
    skip: !sessionStorage.getItem('token'),
  });

  const currentUser = data?.currentUser;

  return { currentUser, loading };
};
