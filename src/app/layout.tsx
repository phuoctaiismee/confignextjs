'use client';

import '@/styles/globals.scss';
import RootStyleRegistry from '@app/emotion';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <title>Next.js + Mantine</title>
      </head>
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
