import { CategoryTreeItem } from './category-tree-item';

const CategoryTree = () => {
  return (
    <div>
      <span
        className="block py-2 px-4 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md"
        data-testid="category-tree"
      >
        Category
      </span>
      <CategoryTreeItem href={'/'} name="New" count={68} />
      <CategoryTreeItem href={'/'} name="Man" count={29} />
      <CategoryTreeItem href={'/'} name="Woman" count={65} />
      <CategoryTreeItem href={'/'} name="Accessories" count={30} />
      <CategoryTreeItem href={'/'} name="Sale" count={45} />
    </div>
  );
};

export default CategoryTree;
