import { customerAtom } from '@/store/user';
import { useAtomValue } from 'jotai';

export const useAddToCart = () => {
  const user = useAtomValue(customerAtom);

  
};
