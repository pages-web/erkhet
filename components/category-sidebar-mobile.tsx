import { useAtom, useAtomValue } from 'jotai';
import { Sheet, SheetContent } from './ui/sheet';
import { categorySheetAtom } from '@/store';

const CategorySideBarMobile = ({ children }: React.PropsWithChildren) => {
  const [open, setOpen] = useAtom(categorySheetAtom);
  return (
    <Sheet open={open} onOpenChange={(op) => setOpen(op)}>
      <SheetContent side="left">{children}</SheetContent>
    </Sheet>
  );
};

export default CategorySideBarMobile;
