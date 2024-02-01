'use client';

import { FC, useEffect, useState } from 'react';
import NextImage, { ImageLoaderProps, ImageProps } from 'next/image';
import { Package } from 'lucide-react';

import { cn, readFile } from '@/lib/utils';

const PLACEHOLDER = '/images/placeholder-1.png';

const Image: FC<
  ImageProps & {
    src?: string;
    alt?: string;
    fallBack?: string;
  }
> = (props) => {
  const {
    src,
    fill = true,
    alt = '',
    onError = () => setSrcI(props.fallBack || PLACEHOLDER),
    width,
    height,
    fallBack,
    sizes,
    className,
    ...rest
  } = props;
  const fixedSrc = readFile(src || '');

  const [isImageLoading, setIsImageLoading] = useState(true);
  const [srcI, setSrcI] = useState(fixedSrc || fallBack || '/icon.png');
  const handleComplete = () => setIsImageLoading(false);

  useEffect(() => {
    if (src) {
      const fixedSrc = readFile(src || '');
      setSrcI(fixedSrc);
    }
  }, [src]);

  const updatedProps = {
    ...rest,
    src: srcI,
    alt,
    fill: !width && !height ? true : undefined,
    width,
    height,
    onError,
  };

  return (
    <NextImage
      {...updatedProps}
      loader={!srcI.startsWith('/') ? cloudflareLoader : undefined}
      onLoad={handleComplete}
      unoptimized={PLACEHOLDER === srcI}
      className={cn(
        className,
        isImageLoading && 'blur-2xl grayscale',
        'object-cover',
        !isImageLoading && srcI !== '/icon.png'
          ? 'grayscale-0'
          : 'grayscale opacity-20 object-contain p-10'
      )}
      sizes={
        sizes ||
        `(max-width: 768px) 20vw,
  (max-width: 1200px) 15vw,
  15vw`
      }
    />
  );
};

export function cloudflareLoader({ src, width, quality }: ImageLoaderProps) {
  const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto'];
  return `https://erxes.io/cdn-cgi/image/${params.join(',')}/${src}`;
}

export default Image;