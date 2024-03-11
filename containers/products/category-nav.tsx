import { CategoryNav } from '@/components/category/category-nav';
import { getCategories } from '@/sdk/queries/products';
import { Suspense } from 'react';

const CategoryNavContainer = async () => {
  const { categories, primaryCategories } = await getCategories();
  return (
    <Suspense>
      <CategoryNav
        categories={categories}
        primaryCategories={primaryCategories}
      />
    </Suspense>
  );
};

export default CategoryNavContainer;
