'use client';

import type { ImageLoaderProps } from 'next/image';

// Docs: https://developers.cloudflare.com/images/url-format
export default function cloudflareLoader({
  src,
  width,
  quality
}: ImageLoaderProps) {
  console.log(src, width, quality);
  const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto'];
  return `https://erxes.io/cdn-cgi/image/${params.join(',')}/${src.trim()}`;
}
