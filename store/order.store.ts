import { IOrder } from '@/types/order.types';
import { atom } from 'jotai';
import { focusAtom } from 'jotai-optics';
import { splitAtom } from 'jotai/utils';
import { cartTotalAtom } from './cart.store';
import { currentUserAtom } from './user.store';

export const defaultOrderItem = { items: [] };

export const activeOrderAtom = atom<IOrder | { items: [] }>({ items: [] });

export const orderParamsAtom = atom(get => {
  const {
    items,
    registerNumber,
    billType,
    description,
    deliveryInfo,
    branchId,
    _id
  } = get(activeOrderAtom) as IOrder;
  const totalAmount = get(cartTotalAtom);
  const customerId = get(currentUserAtom)?.erxesCustomerId;

  return {
    _id,
    items: items.map(({ _id, count, productId, unitPrice }) => ({
      _id,
      count,
      productId,
      unitPrice
    })),
    totalAmount,
    type: 'delivery',
    customerId,
    registerNumber,
    billType,
    origin: 'kiosk',
    deliveryInfo,
    description,
    branchId
  };
});

export const loadingOrderAtom = atom<boolean>(false);

export const crudOrderAtom = atom<boolean>(false);

export const itemsAtom = focusAtom(activeOrderAtom, optic =>
  optic.prop('items')
);

export const itemAtomsAtom = splitAtom(itemsAtom);
