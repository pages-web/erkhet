import { cn } from '@/lib/utils';

export interface ContainerProps
  extends React.InputHTMLAttributes<HTMLDivElement> {}

const ProductsContainer = ({ className, ...rest }: ContainerProps) => {
  return (
    <section
      className={cn(
        'grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mb-10 md:mb-5',
        className
      )}
      {...rest}
    />
  );
};

export default ProductsContainer;
