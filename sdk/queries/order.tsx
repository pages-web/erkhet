import { useQuery } from '@apollo/client';
import { queries } from '../graphql/order';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { currentUserAtom } from '@/store/user.store';
import {
  activeOrderAtom,
  initialLoadingOrderAtom,
  loadingOrderAtom,
} from '@/store/order.store';
import { defaultOrderItem, crudOrderAtom } from '../../store/order.store';
import { localCartAtom } from '@/store/cart.store';
import { OrderItem } from '../../types/order.types';
import { useEffect, useMemo } from 'react';

const useCurrentOrder = () => {
  const { erxesCustomerId } = useAtomValue(currentUserAtom) || {};
  const setCurrentAtom = useSetAtom(activeOrderAtom);
  const [localCart, setLocalCart] = useAtom(localCartAtom);
  const setLoadingOrder = useSetAtom(loadingOrderAtom);
  const setInitialLoadingOrder = useSetAtom(initialLoadingOrderAtom);
  const setTriggerCRUD = useSetAtom(crudOrderAtom);

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
  });

  const fullOrders = useMemo(() => data?.fullOrders, [data]);

  useEffect(() => {
    const currentOrder = (fullOrders || [])[0];
    if (currentOrder) {
      setLoadingOrder(false);
      setInitialLoadingOrder(false);
      setTriggerCRUD(false);
      setCurrentAtom(currentOrder || defaultOrderItem);
      if (localCart.length > 0) {
        if (!currentOrder) {
          setCurrentAtom({
            ...currentOrder,
            items: localCart,
          });
        } else {
          setCurrentAtom({
            ...currentOrder,
            items: syncCarts(localCart, currentOrder.items),
          });
        }
        setTriggerCRUD(true);
        setLocalCart([]);
      }
    }
  }, [fullOrders]);

  const currentOrder = (fullOrders || [])[0];

  return { loading, currentOrder, error };
};

function syncCarts(localCart: OrderItem[], items: OrderItem[]) {
  const synchronizedCart = localCart.map((localItem) => {
    const matchingSavedItem = items.find(
      (savedItem) => savedItem.productId === localItem.productId
    );
    if (matchingSavedItem) {
      // If the product exists in the saved cart, update the count by summing the values
      return { ...localItem, count: localItem.count + matchingSavedItem.count };
    } else {
      return localItem;
    }
  });

  items.forEach((savedItem) => {
    const isAlreadyInLocalCart = synchronizedCart.some(
      (localItem) => localItem.productId === savedItem.productId
    );
    if (!isAlreadyInLocalCart) {
      synchronizedCart.push(savedItem);
    }
  });

  return synchronizedCart;
}

export default useCurrentOrder;
