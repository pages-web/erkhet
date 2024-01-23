import { Breadcrumb, Breadcrumbs } from '@/components/breadcrumb';
import CategoryPageContent from '@/components/category-page-content';
import CategoryTree from '@/components/category-tree';

const Category = () => {
  const breadcrumbs: Breadcrumb[] = [
    { name: 'Home', link: '/' },
    { name: 'All Products', link: '/category' },
  ];
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
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
    </>
  );
};

export default Category;
