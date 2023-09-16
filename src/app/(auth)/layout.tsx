'use client';

import '@/styles/globals.scss';
import { Center, createStyles } from '@mantine/core';
import HeaderAuth from '@app/(auth)/__components/HeaderAuth';

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: '100vh',
  },
  logo: {
    position: 'absolute',
    top: '20px',
    left: '30px',
  },
  center: {
    height: '80vh',
    [theme.fn.smallerThan('sm')]: {
      height: '90vh',
    },
  },
}));
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const { classes } = useStyles();
  return (
    <section className={classes.wrapper}>
      <HeaderAuth />
      <Center w="100%" mx="auto" className={classes.center}>
        {children}
      </Center>
    </section>
  );
}
