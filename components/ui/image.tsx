'use client';

import { FC, useEffect, useState } from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { cn, readFile } from '@/lib/utils';
import { cloudflareLoader } from './picture';

const PLACEHOLDER = '/images/placeholder-1.png';

export type CommonImageProps = Omit<Omit<NextImageProps, 'alt'>, 'src'> & {
  alt?: string;
};

type ImageProps = CommonImageProps & {
  src?: string;
  alt?: string;
  fallBack?: string;
};

export const useImage = (props: ImageProps) => {
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
  const [srcI, setSrcI] = useState(fixedSrc || fallBack || PLACEHOLDER);
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
    onError
  };
  return { updatedProps, isImageLoading, handleComplete, srcI };
};

const Image = (props: ImageProps) => {
  const { className, sizes, ...rest } = props;
  const { updatedProps, srcI, handleComplete, isImageLoading } = useImage(rest);
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

export default Image;
