'use client';

import { Provider as JotaiProvider, atom } from 'jotai';
import Apollo from '@/app/ApolloClient';

export const categorySheetAtom = atom<boolean>(false);
export const cartSheetAtom = atom<boolean>(false);

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <JotaiProvider>
      <Apollo>{children}</Apollo>
    </JotaiProvider>
  );
};

export default Providers;
