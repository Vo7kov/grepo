import { FC, PropsWithChildren } from 'react';

import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';

import './globals.css';

export const metadata: Metadata = {
  title: 'Grepo',
  description: 'Oszczędzaj zielono, żyj czysto',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="pl">
      <body className="antialiased">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
