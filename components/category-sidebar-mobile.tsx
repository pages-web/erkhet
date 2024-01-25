import { useAtom, useAtomValue } from 'jotai';
import { Sheet, SheetContent } from './ui/sheet';
import { categorySheetAtom } from '@/store';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const CategorySideBarMobile = ({ children }: React.PropsWithChildren) => {
  const [open, setOpen] = useAtom(categorySheetAtom);
  const queries = useSearchParams();

  useEffect(() => {
    setOpen(false);
  }, [queries]);
  return (
    <Sheet open={open} onOpenChange={(op) => setOpen(op)}>
      <SheetContent side="left">{children}</SheetContent>
    </Sheet>
  );
};

export default CategorySideBarMobile;
