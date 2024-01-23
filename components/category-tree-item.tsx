import Link from 'next/link';
import { UrlObject } from 'node:url';
import { ReactNode } from 'react';
import { Button } from './ui/button';

export type CategoryTreeItem = {
  name: string;
  count?: number;
  href: string | UrlObject;
};

export type CategoryTreeItemProps = Omit<CategoryTreeItem, 'name'> & {
  name: ReactNode;
};

export function CategoryTreeItem({
  name,
  count,
  href,
}: CategoryTreeItemProps): JSX.Element {
  return (
    <Button
      variant={'ghost'}
      className="md:py-1.5 w-full font-normal"
      asChild
      size="sm"
    >
      <Link href={href}>
        <span className="flex gap-2 items-center w-full">
          <span className="text-base md:text-sm capitalize flex items-center">
            {name}
          </span>
          {Number(count) > -1 && (
            <span className="md:text-sm font-normal text-neutral-600">
              ({count})
            </span>
          )}
        </span>
      </Link>
    </Button>
  );
}
