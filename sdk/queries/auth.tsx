import { useQuery } from '@apollo/client';
import { queries } from '@/sdk/graphql/auth';
import { useSetAtom, useAtom } from 'jotai';
import { currentUserAtom, refetchCurrentUserAtom } from '@/store/user.store';
import { useEffect } from 'react';

export const useCurrentUser = () => {
  const setCurrentUser = useSetAtom(currentUserAtom);
  const [refetchUser, setRefetchUser] = useAtom(refetchCurrentUserAtom);

  const { data, loading, refetch } = useQuery(queries.currentUser, {
    onCompleted({ clientPortalCurrentUser }) {
      setCurrentUser(clientPortalCurrentUser);
    },
    skip: !sessionStorage.getItem('token'),
  });

  const { clientPortalCurrentUser: currentUser } = data || {};

  useEffect(() => {
    if (refetchUser) {
      refetch;
      setRefetchUser(false);
    }
  }, [refetchUser]);

  return { currentUser, loading };
};
