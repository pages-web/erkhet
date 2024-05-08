import { CategoryNav } from '@/components/category/category-nav';
import { getCategories } from '@/sdk/queries/products';

const CategoryNavContainer = async () => {
  const { categories, primaryCategories } = await getCategories();
  return (
    <CategoryNav
      categories={categories}
      primaryCategories={primaryCategories}
    />
  );
};

export default CategoryNavContainer;
