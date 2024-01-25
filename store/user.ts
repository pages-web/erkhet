import { Customer } from '@/types/customer.types';
import { atom } from 'jotai';

export const customerAtom = atom<Customer | null>(null);
