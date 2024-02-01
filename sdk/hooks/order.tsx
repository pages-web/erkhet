import { type ApolloError, useMutation } from '@apollo/client';
import { mutations } from '../graphql/order';
import { useAtomValue, useSetAtom } from 'jotai';
import {
  crudOrderAtom,
  loadingOrderAtom,
  orderParamsAtom
} from '@/store/order.store';
import { useEffect } from 'react';
import { toast } from 'sonner';

export const useOrderCRUD = (props?: { onCompleted: (id: string) => void }) => {
  const params = useAtomValue(orderParamsAtom);
  const triggerCRUDOrder = useAtomValue(crudOrderAtom);
  const setLoading = useSetAtom(loadingOrderAtom);
  const { _id, items } = params;

  const onError = (error: ApolloError) => {
    setLoading(false);
    toast.error(error.message);
  };
  const onCompleted = (data: any) => {
    props?.onCompleted && props?.onCompleted(data.ordersAdd._id);
  };
  const refetchQueries = ['CurrentOrder'];

  const [add] = useMutation(mutations.ordersAdd, {
    onError,
    onCompleted,
    refetchQueries
  });
  const [edit] = useMutation(mutations.ordersEdit, {
    onError,
    onCompleted,
    refetchQueries
  });
  const [change] = useMutation(mutations.ordersChange, {
    onError,
    onCompleted,
    refetchQueries
  });
  const [remove] = useMutation(mutations.ordersCancel, {
    onError,
    onCompleted,
    refetchQueries
  });

  useEffect(() => {
    if (triggerCRUDOrder) {
      setLoading(true);
      if (_id) {
        if (items.length > 0) {
          edit({ variables: params });
        } else {
          remove({
            variables: params
          });
        }
      } else {
        add({
          variables: params
        });
      }
    }
  }, [triggerCRUDOrder]);

  return {};
};
