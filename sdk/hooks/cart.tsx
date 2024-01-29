import { currentUserAtom } from '@/store/user.store';
import { useAtomValue } from 'jotai';

export const useAddToCart = () => {
  const user = useAtomValue(currentUserAtom);

  
};
