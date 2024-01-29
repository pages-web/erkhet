import { IOrder } from '@/types/order.types';
import { atom } from 'jotai';

export const activeOrderAtom = atom<IOrder | null>(null);
