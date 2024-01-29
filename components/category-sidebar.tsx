'use client';

import { useMediaQuery } from '@/hooks/use-media-query';
import dynamic from 'next/dynamic';

const Mobile = dynamic(() => import('./category-sidebar-mobile'), {
  loading: () => <div className="md:w-[303px]"></div>,
});

const CategorySidebar = ({ children }: React.PropsWithChildren) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop)
    return (
      <div className="w-[303px]">
        <div className="sticky top-20 min-h-[900px]">{children}</div>
      </div>
    );

  return (
    <div className="md:w-[303px]">
      <Mobile>
        <div className="grid grid-rows-category-sidebar h-full">{children}</div>
      </Mobile>
    </div>
  );
};

export default CategorySidebar;
