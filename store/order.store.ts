import { IOrder } from '@/types/order.types';
import { atom } from 'jotai';
import { focusAtom } from 'jotai-optics';
import { splitAtom } from 'jotai/utils';

export const defaultOrderItem = { items: [] };

export const activeOrderAtom = atom<IOrder | { items: [] }>({ items: [] });

export const loadingOrderAtom = atom<boolean>(false);

export const itemsAtom = focusAtom(activeOrderAtom, (optic) =>
  optic.prop('items')
);

export const itemAtomsAtom = splitAtom(itemsAtom);
