import Link from 'next/link';
import { UrlObject } from 'node:url';
import { ReactNode } from 'react';
import { Button } from './ui/button';
import { ICategory } from '../types/product.types';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

export type CategoryTreeItemProps =
  | (ICategory & { parent?: boolean })
  | ICategory;

export function CategoryTreeItem({
  parent,
  name,
  order,
}: ICategory & { parent?: boolean }): JSX.Element {
  return (
    <Button
      variant={'ghost'}
      className="md:py-1.5 w-full font-normal"
      asChild
      size="sm"
    >
      <Link href={{ pathname: '/category', query: { order } }}>
        <span
          className={cn('flex gap-2 items-center w-full', !parent && 'pl-6')}
        >
          {parent && <ArrowLeftIcon className="text-neutral-600 h-4 w-4" />}
          <span className="text-base md:text-sm capitalize flex items-center">
            {name || 'All Products'}
          </span>
        </span>
      </Link>
    </Button>
  );
}

{
  /* {Number(count) > -1 && (
            <span className="md:text-sm font-normal text-neutral-600">
              ({count})
            </span>
          )} */
}
