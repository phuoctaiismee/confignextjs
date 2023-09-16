'use client';

import { AppShell, Footer, Header } from '@mantine/core';
import { DoubleNavbar } from '@components/Sidebar/Sidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      padding="md"
      navbar={<DoubleNavbar />}
      header={<Header height={50}>This is header</Header>}
      footer={<Footer height={50}>This is footer</Footer>}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
}
