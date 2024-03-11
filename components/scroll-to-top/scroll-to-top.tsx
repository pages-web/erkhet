'use client';

import { ChevronUpIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { useRef } from 'react';
import useIntersection from '@/hooks/useIntersection';
import { cn } from '@/lib/utils';

const ScrollToTop = () => {
  const intersectionReference = useRef(null);
  const intersection = useIntersection(intersectionReference, {
    rootMargin: '0px',
    threshold: 0
  });

  return (
    <div
      className="top-1/2 pointer-events-none z-40 absolute"
      ref={intersectionReference}
    >
      <Button
        className={cn(
          'fixed right-4 bottom-20',
          intersection?.isIntersecting
            ? 'opacity-0'
            : 'opacity-100 pointer-events-auto'
        )}
        size="icon"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="scroll-top"
      >
        <ChevronUpIcon className="transition-opacity " />
      </Button>
    </div>
  );
};

export default ScrollToTop;
