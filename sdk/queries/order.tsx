import { useQuery } from '@apollo/client';
import { queries } from '../graphql/order';
import { useAtomValue, useSetAtom } from 'jotai';
import { currentUserAtom } from '@/store/user.store';
import { activeOrderAtom } from '@/store/order.store';
import { defaultOrderItem } from '../../store/order.store';

const useCurrentOrder = () => {
  const { erxesCustomerId } = useAtomValue(currentUserAtom) || {};
  const setCurrentAtom = useSetAtom(activeOrderAtom);
  const { data, error, loading } = useQuery(queries.currentOrder, {
    variables: {
      customerId: erxesCustomerId,
      statuses: ['new'],
      perPage: 1,
      page: 1,
      sortField: 'createdAt',
      sortDirection: -1,
    },
    skip: !erxesCustomerId,
    onCompleted({ fullOrders }) {
      const currentOrder = fullOrders[0];
      setCurrentAtom(currentOrder || defaultOrderItem);
    },
  });

  const currentOrder = (data?.fullOrders || [])[0];

  return { loading, currentOrder, error };
};

export default useCurrentOrder;
