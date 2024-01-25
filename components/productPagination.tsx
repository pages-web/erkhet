import { PER_PAGE } from '@/lib/constants';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination';
import { Separator } from './ui/separator';
import { IPageProps } from '@/types/index';

const ProductPagination = ({
  searchParams,
  totalProducts,
}: {
  searchParams: IPageProps['searchParams'];
  totalProducts: number;
}) => {
  if (totalProducts <= PER_PAGE) return null;
  const totalPage = Math.ceil(totalProducts / PER_PAGE);
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1);

  const activePageNumber = parseInt(searchParams.page?.toString() || '1');

  return (
    <>
      <Separator className="mb-3" />
      <Pagination>
        <PaginationContent className="justify-between w-full">
          <PaginationPrevious
            href={{
              pathname: '/category',
              query: {
                ...searchParams,
                page: activePageNumber === 1 ? 1 : activePageNumber - 1,
              },
            }}
          />

          <div className="flex items-center gap-1">
            {pages.map((page) => (
              <PaginationLink
                href={{
                  pathname: '/category',
                  query: { ...searchParams, page },
                }}
                isActive={activePageNumber === page}
              >
                {page}
              </PaginationLink>
            ))}
          </div>

          <PaginationNext
            href={{
              pathname: '/category',
              query: {
                ...searchParams,
                page:
                  activePageNumber === totalPage
                    ? totalPage
                    : activePageNumber + 1,
              },
            }}
          />
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default ProductPagination;
