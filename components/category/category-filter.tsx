import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const CategoryFilter = () => {
  return (
    <div>
      <span className="block py-2 px-4 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md">
        Sort by
      </span>
      <Select>
        <SelectTrigger className="w-full h-11">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Latest</SelectItem>
          <SelectItem value="dark">Price</SelectItem>
          <SelectItem value="system">A-Z</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
