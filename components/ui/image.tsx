'use client';

import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { cn, readFile } from '@/lib/utils';
import cloudflareLoader from '@/lib/image-loader';
import { useState } from 'react';

const PLACEHOLDER = '/images/placeholder-1.png';

const Image = ({
  src,
  alt,
  width,
  height,
  sizes,
  className,
  skipAnimation,
  ...restProps
}: ImageProps) => {
  const fixedSrc = readFile(src || '');
  const [srcI, setSrcI] = useState(fixedSrc || PLACEHOLDER);
  const [loading, setLoading] = useState(true);
  const getLoader = () => {
    if (srcI.includes('//:localhost') || srcI.startsWith('/')) return undefined;
    return cloudflareLoader;
  };

  const handleComplete = () => setLoading(false);
  const onError = () => setSrcI(PLACEHOLDER);
  const fill = (!width && !height) || undefined;
  return (
    <NextImage
      {...restProps}
      src={srcI}
      loader={getLoader()}
      onLoad={handleComplete}
      onError={onError}
      alt={alt || ''}
      fill={fill}
      width={width}
      height={height}
      className={cn(
        'object-cover duration-700 ease-in-out',
        !skipAnimation && loading
          ? 'scale-110 blur-2xl grayscale'
          : 'scale-100 blur-0 grayscale-0',
        srcI === PLACEHOLDER && 'object-contain p-10',
        className
      )}
      sizes={
        fill
          ? sizes ||
            `(max-width: 768px) 20vw,
      (max-width: 1200px) 15vw,
      15vw`
          : undefined
      }
    />
  );
};

export type CommonImageProps = Omit<
  Omit<Omit<NextImageProps, 'alt'>, 'src'>,
  'fill'
>;

type ImageProps = CommonImageProps & {
  src?: string;
  alt?: string;
  skipAnimation?: boolean;
};
export default Image;
