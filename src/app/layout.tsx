'use client';

import './globals.css';

import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';

import { DoubleNavbar } from '@components/navbar/navbar';
import { MobileFooter } from '@components/footer/mobilefooter';
import RootStyleRegistry from './emotion';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme();
  // const [opened, setOpened] = useState(false);
  return (
    <html lang="en-US">
      <head>
        <title>Next.js + Mantine</title>
      </head>
      <body>
        <RootStyleRegistry>
          <AppShell
            layout="alt"
            styles={{
              main: {
                background:
                  theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
              },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
              <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                  <DoubleNavbar />
                </Navbar>
              </MediaQuery>
            }
            aside={
              <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                  <Text>Application sidebar</Text>
                </Aside>
              </MediaQuery>
            }
            footer={
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Footer height={60} p="md">
                  <MobileFooter />
                </Footer>
              </MediaQuery>
            }
            header={
              // <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Header height={{ base: 60, md: 60 }} p="md">
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  {/*<Burger*/}
                  {/*  opened={opened}*/}
                  {/*  onClick={() => setOpened((o) => !o)}*/}
                  {/*  size="sm"*/}
                  {/*  color={theme.colors.gray[6]}*/}
                  {/*  mr="xl"*/}
                  {/*/>*/}

                  <Text>Application header</Text>
                </div>
              </Header>
              // </MediaQuery>
            }
          >
            {children}
          </AppShell>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
