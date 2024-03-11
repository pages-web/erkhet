'use client';

import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

export function CategoryNav() {
  return (
    <NavigationMenu className="-mx-4 flex-auto max-w-screen-2xl justify-start">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent className="md:w-full">
            <div className="p-4 text-sm">
              <Button variant="link" className="font-normal">
                Books <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
              <ul className="grid grid-cols-4 w-full">
                <li>
                  <h4 className="font-medium py-1 px-4">Recommend</h4>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                </li>
                <li>
                  <h4 className="font-medium py-2 px-4">Recommend</h4>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                </li>
                <li>
                  <h4 className="font-medium py-2 px-4">Recommend</h4>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                </li>
                <li>
                  <h4 className="font-medium py-2 px-4">Recommend</h4>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent className="md:w-full">
            <div className="p-4 text-sm">
              <Button variant="link" className="font-normal">
                Books <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
              <ul className="grid grid-cols-4 w-full">
                <li>
                  <h4 className="font-medium py-1 px-4">Recommend</h4>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                </li>
                <li>
                  <h4 className="font-medium py-2 px-4">Recommend</h4>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                </li>
                <li>
                  <h4 className="font-medium py-2 px-4">Recommend</h4>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                </li>
                <li>
                  <h4 className="font-medium py-2 px-4">Recommend</h4>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                  <Button variant="link" className="flex h-7 font-normal">
                    Books
                  </Button>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
