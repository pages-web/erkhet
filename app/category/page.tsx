import CategoryPageContent from '@/components/category-page-content';
import CategoryTree from '@/components/category-tree';
import { BreadcrumbsLayout } from '../breadcrumbs-layout';

const Category = () => {
  const breadcrumbs = [
    { name: 'Home', link: '/' },
    { name: 'All Products', link: '/category' },
  ];
  return (
    <BreadcrumbsLayout breadcrumbs={breadcrumbs}>
      <CategoryPageContent
        title="Products"
        products={[]}
        totalProducts={12}
        sidebar={
          <>
            <CategoryTree />
          </>
        }
      />
    </BreadcrumbsLayout>
  );
};

export default Category;
