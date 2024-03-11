import { cn } from '@/lib/utils';

export type HeadingProps = {
  title: string;
  tag?: Extract<React.ElementType, `h${number}`>;
  className?: string;
};

export function Heading({
  tag = 'h1',
  className,
  title,
  ...attributes
}: HeadingProps): JSX.Element {
  const Tag = tag;

  return (
    <Tag
      className={cn(
        'text-center mb-3 md:mb-4 font-bold text-2xl md:text-4xl',
        className
      )}
      {...attributes}
    >
      {title}
    </Tag>
  );
}
