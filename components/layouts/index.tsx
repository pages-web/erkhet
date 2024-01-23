import { ChevronDownIcon } from '@radix-ui/react-icons';
import { NavbarTop } from '../navbar-top';
import { Button } from '../ui/button';
import Search from '../search/search';
import { ShoppingCartIcon, UserIcon } from 'lucide-react';
import BottomNav from '../bottom-nav';
import ScrollToTop from '../scroll-to-top';
import Footer from '../footer/footer';
import Link from 'next/link';

const DefaultLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <NavbarTop>
        <Button
          variant="ghost"
          className="hover:bg-white/10 hover:text-white hidden md:inline-flex"
          asChild
        >
          <Link href={'/category'}>
            Products
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </Link>
        </Button>
        <Search className="hidden md:block flex-1" />
        <nav className="hidden md:flex md:flex-row md:flex-nowrap gap-2">
          <Button
            size="icon"
            variant={'ghost'}
            className="hover:bg-white/10 hover:text-white"
          >
            <ShoppingCartIcon className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant={'ghost'}
            className="hover:bg-white/10 hover:text-white"
          >
            <UserIcon className="h-5 w-5" />
          </Button>
        </nav>
      </NavbarTop>
      {children}
      <ScrollToTop />
      <BottomNav />
      <Footer />
    </>
  );
};

export default DefaultLayout;
