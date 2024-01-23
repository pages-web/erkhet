'use client';

import {
  HomeIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCart,
  User2Icon,
} from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const getItems = (cartLineItemsCount?: number) => [
  {
    label: 'home',
    Icon: HomeIcon,
    path: '/',
  },
  {
    label: 'products',
    Icon: MenuIcon,
    path: '/category',
  },
  {
    label: 'search',
    Icon: SearchIcon,
    path: '/search',
  },
  {
    label: 'cart',
    Icon: ShoppingCart,
    path: '/cart',
  },
  {
    label: 'profile',
    Icon: User2Icon,
    path: '/profile',
  },
];

const BottomNav = () => {
  const pathname = usePathname();
  return (
    <div className="z-50 w-full fixed bottom-0 left-0 flex flex-row items-stretch md:hidden bg-primary">
      {getItems().map(({ label, Icon, path }) => (
        <Button
          className={cn(
            'flex-col h-auto w-full gap-1 rounded-none px-0 pb-1.5 pt-3',
            path === pathname && 'bg-slate-800'
          )}
          key={label}
          asChild
        >
          <Link href={path}>
            <Icon className='h-6 w-6' strokeWidth={1.8}/>
            <span className="capitalize text-xs font-bold">{label}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default BottomNav;
