import { cn } from '@/lib/utils';
import { bottomLinks, categories, contactOptions, socialMedia } from '@/mocks';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const Footer = ({ className = '' }: { className?: string }) => {
  return (
    <footer className={cn('pt-10 bg-neutral-100 pb-14 md:pb-0', className)}>
      <div className="grid gap-5 justify-center grid-cols-2 md:grid-cols-4 pb-10 container">
        {categories.map(({ key, subcategories }) => (
          <div key={key} className="min-w-[25%] xs:min-w-[50%] flex flex-col">
            <p className="font-semibold leading-7 text-neutral-900 text-lg pb-2 capitalize">
              {key}
            </p>
            {subcategories?.map(({ link, key: subcategoryKey }) => (
              <Button
                key={subcategoryKey}
                variant="link"
                className="justify-start px-0 capitalize text-sm font-normal text-neutral-600"
                size="sm"
                asChild
              >
                <Link href={link}>{subcategoryKey}</Link>
              </Button>
            ))}
          </div>
        ))}
      </div>
      <Separator />
      <div className="py-10 lg:flex container">
        {contactOptions.map(({ icon, link, details, key }) => (
          <div
            key={key}
            className="mx-auto my-4 text-center flex flex-col items-center"
          >
            {icon}
            <Button
              variant="link"
              asChild
              className="mb-2 py-1 font-semibold text-lg capitalize"
            >
              <Link href={link}>{key}</Link>
            </Button>
            {details?.map((option) => (
              <p className="text-sm leading-5" key={option}>
                {option}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="bg-neutral-900" data-testid="section-bottom">
        <div className="container text-sm leading-5 text-white justify-end py-10 lg:flex">
          <div className="flex justify-center gap-6 lg:self-start">
            {socialMedia.map(({ icon, label, link }) => (
              <Button asChild key={label} size="icon" variant={'ghost'} className='hover:bg-white/10 hover:text-white'>
                <Link href={link} title={label}>
                  {icon}
                </Link>
              </Button>
            ))}
          </div>
          <div className="flex justify-center gap-6 my-6 lg:ml-auto lg:my-0">
            {bottomLinks.map(({ link, key }) => (
              <Button
                key={key}
                asChild
                variant="link"
                className="text-white hover:text-white capitalize text-sm px-0"
              >
                <Link href={link}>{key}</Link>
              </Button>
            ))}
          </div>
          <p className="flex items-center justify-center leading-5 text-center text-sm text-white/50 font-body md:ml-6">
            {companyName}
          </p>
        </div>
      </div>
    </footer>
  );
};

export const companyName = `© ${new Date().getFullYear()} Erxes Inc`;

export default Footer;
