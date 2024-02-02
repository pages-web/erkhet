import { Customer } from '@/types/customer.types';
import { atom } from 'jotai';

export const currentUserAtom = atom<Customer | null>(null);

export const loadingUserAtom = atom<boolean>(true);

export const refetchCurrentUserAtom = atom<boolean>(false);
