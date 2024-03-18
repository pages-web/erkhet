import { ICategory } from '@/types/products.types';
import Image from 'next/image';
import Link from 'next/link';

interface CategoryWithImage extends ICategory {
  image: string;
}

export type CategoryCardProps = {
  //   items: CategoryWithImage[];
};

const items = [
  {
    name: 'New',
    image: '/images/new-card.png',
    order: '/category'
  },
  {
    name: 'Men',
    image: '/images/men-card.png',
    order: '/category'
  },
  {
    name: 'Women',
    image: '/images/women-card.png',
    order: '/category'
  }
];

export function CategoryCard({ ...attributes }: CategoryCardProps) {
  return (
    <div
      className="container mb-10 flex flex-nowrap md:flex-wrap md:justify-center overflow-x-scroll no-scrollbar"
      data-testid="category-card"
      {...attributes}
    >
      {items.map(({ name, image, order }) => (
        <div className="mr-2 md:mr-6 group" key={name}>
          <Link
            className="w-full h-full z-[1] focus-visible:outline focus-visible:outline-offset-2 focus-visible:rounded-md"
            href={`/category?slug=${order}`}
            aria-label={name}
          >
            <div className="relative h-40 md:h-60 w-40 md:w-60 rounded-full bg-neutral-100 group-hover:shadow-xl group-active:shadow-none">
              <Image src={image} alt={name} width={240} height={240} />
            </div>
            <div className="flex justify-center">
              <p className="mt-4 font-semibold no-underline text-base group-hover:underline group-hover:text-primary group-hover:font-normal group-active:text-primary group-active:font-normal">
                {name}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
