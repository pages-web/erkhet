import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { cn, getSimilarColorWithOpacity, hexToHsl } from '@/lib/utils';
import DefaultLayout from '@/components/layouts';
import Providers from '@/store';
import CurrentOrder from '@/containers/currentOrder';
import { Toaster } from '@/components/ui/sonner';
import OrderCRUD from '@/containers/order-cud';
import { getConfig } from '@/sdk/queries/auth';
import ConfigProvider from '@/components/layouts/config';
import { Metadata } from 'next/types';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export async function generateMetadata(): Promise<Metadata> {
  const { config } = await getConfig();
  const { pdomain, name, description, uiOptions } = config || {};

  return {
    metadataBase: new URL(pdomain),
    title: name,
    description,
    openGraph: {
      title: name,
      description,
      images: [uiOptions.logo],
      type: 'website'
    }
  };
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const { config } = await getConfig();
  const { uiOptions } = config || {};
  const { colors } = uiOptions || {};
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={uiOptions?.favIcon} />
        {!!colors && (
          <style>{`
         :root {
           --primary: ${hexToHsl(colors?.primary)};
           --secondary: ${hexToHsl(
             getSimilarColorWithOpacity(colors?.primary, 0.1)
           )};
           --accent: ${hexToHsl(
             getSimilarColorWithOpacity(colors.primary, 0.2)
           )};
           --background: ${hexToHsl(colors?.third)};
           --card: ${hexToHsl(colors?.third)};
          }
        `}</style>
        )}
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers>
          <ConfigProvider config={config}>
            <DefaultLayout>{children}</DefaultLayout>
          </ConfigProvider>
          <CurrentOrder />
          <OrderCRUD />
        </Providers>
        <Toaster richColors closeButton />
        <SpeedInsights />
      </body>
    </html>
  );
}

//  --border: ${hexToHsl(
//    getSimilarColorWithOpacity(colors.primary, 0.3)
//  )};
//  --input: ${hexToHsl(
//    getSimilarColorWithOpacity(colors.primary, 0.2)
//  )};
