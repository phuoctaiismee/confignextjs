'use client';

import HeaderClient from '@components/HeaderClient/HeaderClient';
import { FooterClient } from '@components/Footer/FooterClient';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="px-32">
      <HeaderClient />
      {children}
      <FooterClient />
    </section>
  );
}
