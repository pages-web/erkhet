'use client';

import Image from '../ui/image';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '../ui/carousel';
import { memo, useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { IAttachment } from '@/types/products.types';

const Gallery = ({ attachments = [] }: { attachments: IAttachment[] }) => {
  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [emblaMainApi, setApi] = useState<CarouselApi>();
  const [emblaThumbsApi, setThumbApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="flex flex-row-reverse gap-6 justify-stretch">
      <Carousel className="flex-1" setApi={(ap) => setApi(ap)}>
        <CarouselContent className="ml-0">
          {attachments.map((attachment) => (
            <CarouselItem className="relative aspect-square pl-0">
              <Image
                src={attachment?.url || ''}
                height={600}
                width={600}
                alt=""
                className="absolute inset-0 h-full w-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel
        orientation="vertical"
        className="w-28 hidden md:block"
        opts={{ containScroll: 'keepSnaps', dragFree: true }}
        setApi={(ap) => setThumbApi(ap)}
      >
        <CarouselContent className="basis-[5rem] xl:max-h-[600px] mt-0">
          {attachments.map((item, index) => (
            <CarouselItem
              className={cn(
                'w-28 h-28 border-2 transition-colors pt-0 rounded-xl overflow-hidden p-0',
                selectedIndex === index
                  ? 'border-primary'
                  : 'border-transparent'
              )}
              onClick={() => onThumbClick(index)}
            >
              <Image
                src={item?.url || ''}
                height={200}
                width={200}
                alt=""
                className="h-full w-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default memo(Gallery);
