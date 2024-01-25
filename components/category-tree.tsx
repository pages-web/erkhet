import { ICategory } from '@/types/product.types';
import { CategoryTreeItem } from './category-tree-item';

const CategoryTree = ({
  categories,
}: {
  categories: (ICategory & { parent?: true })[];
}) => {
  return (
    <div>
      <span
        className="block py-2 px-4 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md"
        data-testid="category-tree"
      >
        Category
      </span>
      {categories.map((cat) => (
        <CategoryTreeItem {...cat} key={cat._id} />
      ))}
    </div>
  );
};

export default CategoryTree;
