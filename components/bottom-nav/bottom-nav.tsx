'use client';

import {
  HomeIcon,
  LucideIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCart,
  User2Icon
} from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BottomProfile from './bottom-profile';
import { memo } from 'react';
import { Badge } from '@/components/ui/badge';
import CartCount from '../cart/cart-count';

const getItems = (cartLineItemsCount?: number) => [
  {
    label: 'home',
    Icon: HomeIcon,
    path: '/'
  },
  {
    label: 'products',
    Icon: MenuIcon,
    path: '/category'
  },
  {
    label: 'search',
    Icon: SearchIcon,
    path: '/search'
  },
  {
    label: 'cart',
    Icon: ShoppingCart,
    path: '/cart'
  },
  {
    label: 'profile',
    Icon: User2Icon,
    path: '/profile'
  }
];

const BottomNav = () => {
  const pathname = usePathname();
  return (
    <div className="z-50 w-full fixed bottom-0 left-0 flex flex-row items-stretch md:hidden bg-primary">
      {getItems().map(({ label, Icon, path }) => {
        if (path === '/profile')
          return <BottomProfile key={label} Icon={Icon} />;

        if (path === '/cart')
          return (
            <BottomNavItem
              label={label}
              Icon={Icon}
              path={path}
              pathname={pathname}
              key={label}
            >
              <Badge
                variant="outline"
                className="absolute right-1/2 top-2 bg-background p-0 h-4 min-w-4 rounded-lg justify-center text-xs text-center leading-none translate-x-5"
              >
                <CartCount />
              </Badge>
            </BottomNavItem>
          );

        return (
          <BottomNavItem
            label={label}
            Icon={Icon}
            path={path}
            pathname={pathname}
            key={label}
          />
        );
      })}
    </div>
  );
};

export const BottomNavItem = memo(
  ({
    children,
    path,
    pathname,
    label,
    Icon
  }: React.PropsWithChildren & {
    path: string;
    label: string;
    Icon: LucideIcon;
    pathname: string;
  }) => {
    return (
      <Button
        className={cn(
          'flex-col h-auto w-full gap-1 rounded-none px-0 pb-1.5 pt-3 relative',
          path === pathname && 'bg-slate-800'
        )}
        key={label}
        asChild
      >
        <Link href={path}>
          <Icon className="h-6 w-6" strokeWidth={1.8} />
          <span className="capitalize text-xs font-bold">{label}</span>
          {children}
        </Link>
      </Button>
    );
  }
);

export default BottomNav;
