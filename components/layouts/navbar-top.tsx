import Link from 'next/link';
import { getConfig } from '@/sdk/queries/auth';
import Image from '@/components/ui/image';

export async function NavbarTop({
  children,
  ...rest
}: React.PropsWithChildren) {
  const { config } = await getConfig();
  const { logo } = config?.uiOptions || {};
  return (
    <header
      className=" z-50 sticky w-full top-0 left-0 md:shadow-sm py-4 bg-white"
      {...rest}
    >
      <div className="flex gap-[clamp(1rem,3vw,3rem)] items-center w-full md:h-[60px] container pt-1 md:pt-0">
        <Link
          href="/"
          aria-label="SF Homepage"
          className="h-12 w-40 text-2xl overflow-hidden"
        >
          <Image
            src={logo}
            height={100}
            width={128}
            quality={100}
            skipAnimation
            priority
            alt=""
            className="object-contain h-12 w-auto object-left"
          />
        </Link>
        {children}
      </div>
    </header>
  );
}
