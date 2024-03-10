import { useAtom } from 'jotai';
import { Sheet, SheetClose, SheetContent } from './ui/sheet';
import { categorySheetAtom } from '@/store';
import { Button } from './ui/button';
import { XIcon } from 'lucide-react';

const CategorySideBarMobile = ({ children }: React.PropsWithChildren) => {
  const [open, setOpen] = useAtom(categorySheetAtom);

  return (
    <Sheet open={open} onOpenChange={op => setOpen(op)}>
      <SheetContent side="left" className="pt-3">
        <div className="flex items-center justify-between pb-4">
          <h2 className="font-bold mt-1 text-xl">Cart</h2>
          <SheetClose asChild>
            <Button size="icon" variant="ghost">
              <XIcon className="h-6 w-6" />
            </Button>
          </SheetClose>
        </div>
        {children}
      </SheetContent>
    </Sheet>
  );
};

export default CategorySideBarMobile;
