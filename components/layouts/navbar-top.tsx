import Link from 'next/link';
import { Separator } from '../ui/separator';
import CategoryNavContainer from '@/containers/products/category-nav';

export function NavbarTop({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) {
  return (
    <header
      className={
        'h-14 md:h-[111px] z-50 md:sticky md:-top-3 md:pt-2.5 md:shadow-md bg-primary text-white'
      }
      {...rest}
    >
      <div className="flex gap-[clamp(1rem,3vw,3rem)] items-center w-full md:h-[60px] md:sticky top-0 container pt-5 md:pt-0">
        <Link
          href="/"
          aria-label="SF Homepage"
          className="h-6 md:h-7 -mt-1.5 text-2xl"
        >
          LOGO
        </Link>
        {children}
      </div>

      <div className="hidden md:block bg-primary sticky top-[60px]">
        <Separator className="bg-white/10" />
        <div className="container py-0.5 flex">
          <CategoryNavContainer />
        </div>
      </div>
    </header>
  );
}
