import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { cn } from '@/lib/utils';
import DefaultLayout from '@/components/layouts';
import Providers from '@/store';
import CurrentOrder from '@/containers/currentOrder';
import { Toaster } from '@/components/ui/sonner';
import OrderCRUD from '@/containers/order-crud';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers>
          <DefaultLayout>{children}</DefaultLayout>
          <CurrentOrder />
          <OrderCRUD />
        </Providers>
        <Toaster richColors closeButton />
        <SpeedInsights />
      </body>
    </html>
  );
}
