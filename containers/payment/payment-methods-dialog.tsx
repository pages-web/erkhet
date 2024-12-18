import { Button } from "@/components/ui/button";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useAtom } from "jotai";
import { openMethodsAtom } from "@/store/payment.store";

const PaymentMethods = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useAtom(openMethodsAtom);

  if (isDesktop)
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="bottom"
          className="md:h-[95vh] md:max-h-[768px] rounded-t-2xl"
        >
          <div className="relative">
            <SheetPrimitive.Close asChild>
              <Button
                className="absolute right-0 md:right-5 -top-1 rounded-full"
                variant="outline"
                size="icon"
              >
                <XIcon className="h-[1.125rem] w-[1.125rem]" />
              </Button>
            </SheetPrimitive.Close>
          </div>
          <div className="container max-w-5xl px-0"></div>
        </SheetContent>
      </Sheet>
    );

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <div className="container py-4"></div>
      </DrawerContent>
    </Drawer>
  );
};

export default PaymentMethods;
