'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../ui/accordion';
import Rate from '../ui/rate';

const ProductAccordion = ({
  description,
}: {
  description?: string;
  _id: string;
}) => {
  return (
    <Accordion type="multiple" collapsible >
      {!!description && (
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-semibold">
            Product Details
          </AccordionTrigger>
          <AccordionContent>{description}</AccordionContent>
        </AccordionItem>
      )}
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-xl font-semibold">
          Customer Reviews
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <div className="border p-6 rounded-lg">
              <div className="flex gap-3 items-center">
                <Rate rate={2} />
                <div className="inline-flex  items-center justify-between flex-1 text-xs text-neutral-500">
                  <span className="">22/03/2023</span>
                  <span>Baterdene Khashbat</span>
                </div>
              </div>
              <div className="text-sm mt-2">
                I'm so happy with the fit of this product.
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductAccordion;
