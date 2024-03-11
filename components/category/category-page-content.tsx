import { PropsWithChildren, ReactNode } from 'react';
import { IProduct } from '@/types/product.types';
import CategorySidebar from './category-sidebar';
import CategorySidebarTrigger from './category-sidebar-trigger';
import ProductCard from '../product-card/product-card';
import ProductPagination from '../product-pagination/product-pagination';
import { IPageProps } from '@/types';

export interface CategoryPageContentProps extends PropsWithChildren {
  title: string;
  products: IProduct[];
  totalProducts: number;
  sidebar?: ReactNode;
  searchParams: IPageProps['searchParams'];
}

const CategoryPageContent = ({
  title,
  sidebar,
  products,
  totalProducts,
  searchParams
}: CategoryPageContentProps) => {
  return (
    <div className="mb-20">
      <h1 className="md:my-6 font-bold text-2xl md:text-4xl">{title}</h1>
      <div className="md:flex gap-6">
        <CategorySidebar>{sidebar}</CategorySidebar>
        <div className="flex-1">
          <div className="flex justify-between items-center py-3 mb-2 sticky md:py-0 md:static top-0 z-50 bg-white">
            <span className="font-bold md:text-lg">
              {totalProducts} Products
            </span>
            <CategorySidebarTrigger />
          </div>
          <section className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mb-10 md:mb-5">
            {products.map(product => (
              <ProductCard key={product._id} {...product} />
            ))}
          </section>
          <ProductPagination
            searchParams={searchParams}
            totalProducts={totalProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryPageContent;

export interface CategoryPageContentProps extends PropsWithChildren {
  title: string;
  products: IProduct[];
  totalProducts: number;
  sidebar?: ReactNode;
  itemsPerPage?: number;
}

export interface CategorySidebarProps extends PropsWithChildren {
  isOpen: boolean;
  closeSidebar: () => void;
}
