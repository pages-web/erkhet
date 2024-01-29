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
  const totalPages = Math.ceil(totalProducts / PER_PAGE);

  const currentPage = parseInt(searchParams.page?.toString() || '1');
  const displayPages = 2;

  const getPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - displayPages && i <= currentPage + displayPages)
      ) {
        pageNumbers.push(i);
      } else if (pageNumbers[pageNumbers.length - 1] !== '...') {
        pageNumbers.push('...');
      }
    }

    return pageNumbers;
  };

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
                page: currentPage === 1 ? 1 : currentPage - 1,
              },
            }}
          />

          <div className="flex items-center gap-1">
            {getPageNumbers().map((page, i) =>
              page === '...' ? (
                <PaginationItem key={i}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationLink
                  href={{
                    pathname: '/category',
                    query: { ...searchParams, page },
                  }}
                  isActive={currentPage === page}
                  key={i}
                >
                  {page}
                </PaginationLink>
              )
            )}
          </div>

          <PaginationNext
            href={{
              pathname: '/category',
              query: {
                ...searchParams,
                page: currentPage === totalPages ? totalPages : currentPage + 1,
              },
            }}
          />
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default ProductPagination;
