'use client';

import { Provider as JotaiProvider, atom } from 'jotai';
import { useState } from 'react';

export const categorySheetAtom = atom<boolean>(false);

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
      <JotaiProvider>{children}</JotaiProvider>
  );
};

export default Providers;
