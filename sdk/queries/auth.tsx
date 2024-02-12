import { useQuery } from '@apollo/client';
import { queries } from '@/sdk/graphql/auth';
import { useSetAtom, useAtom } from 'jotai';
import {
  currentUserAtom,
  loadingUserAtom,
  refetchCurrentUserAtom,
} from '@/store/user.store';
import { useEffect } from 'react';

export const useCurrentUser = (onCompleted?: (data: any) => void) => {
  const setCurrentUser = useSetAtom(currentUserAtom);
  const setLoading = useSetAtom(loadingUserAtom);
  const [refetchUser, setRefetchUser] = useAtom(refetchCurrentUserAtom);

  const { data, loading, refetch } = useQuery(queries.currentUser, {
    onCompleted({ clientPortalCurrentUser }) {
      setCurrentUser(clientPortalCurrentUser);
      setLoading(false);
      onCompleted && onCompleted(clientPortalCurrentUser);
    },
    skip:
      typeof window === 'undefined' || sessionStorage.getItem('token') === null,
  });

  const { clientPortalCurrentUser: currentUser } = data || {};

  useEffect(() => {
    if (refetchUser) {
      refetch();
      setRefetchUser(false);
    }
  }, [refetchUser]);

  return { currentUser, loading };
};

export const useUserDetail = () => {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const { loading } = useQuery(queries.userDetail, {
    onCompleted({ clientPortalCurrentUser }) {
      setCurrentUser({ ...currentUser, ...clientPortalCurrentUser });
    },
  });

  return { loading };
};
