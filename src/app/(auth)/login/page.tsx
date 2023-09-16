'use client';

import React from 'react';
import {
  Avatar,
  Button,
  createStyles,
  Grid,
  Paper,
  rem,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useRouter } from 'next/navigation';

const useStyles = createStyles((theme) => ({
  box: {
    width: '800px',
    height: '500px',
    borderRadius: '20px',
    padding: '20px',
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
  },
  form: {
    height: '100%',
    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
  left: {
    height: '100%',
    backgroundSize: 'cover',
    padding: '40px',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1603926295083-850ecd5fa6ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80)',
  },
  hiddenDesktop: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  hero_title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(40),
    textAlign: 'center',

    // [theme.fn.smallerThan('md')]: {
    //   maxWidth: '100%',
    //   fontSize: rem(34),
    //   lineHeight: 1.15,
    // },
  },
  description: {
    color: theme.white,
    textAlign: 'center',
    maxWidth: rem(500),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(20),

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));
const Login = () => {
  const router = useRouter();
  const { classes } = useStyles();
  return (
    <div className={classes.box}>
      <Grid gutter={0} h="100%" align="center">
        <Grid.Col md={6} h="100%">
          <Paper className={classes.form} p={30}>
            <Stack justify="space-around" h="90%">
              <Stack spacing="sm" px="auto">
                <Title order={2} className={classes.title} ta="center" mt="md">
                  Đăng nhập
                </Title>
                <Text align="center" color="dimmed">
                  Nhập số điện thoại để tiến hành đặt món ngay
                </Text>
              </Stack>
              <TextInput
                inputMode="tel"
                label="Số điện thoại"
                placeholder="+84 123456789"
                size="md"
                withAsterisk
                className="w-full"
              />
              <Stack spacing="sm" px="auto">
                <Button
                  fullWidth
                  size="md"
                  variant="gradient"
                  gradient={{ from: 'green', to: 'cyan' }}
                  onClick={() => router.push('/otp')}
                >
                  Đăng nhập
                </Button>{' '}
                <Button
                  leftIcon={<Avatar src="/google-icon.svg" size="sm" color="cyan" radius="xl" />}
                  variant="outline"
                  fullWidth
                  size="md"
                >
                  Đăng nhập với Google
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Grid.Col>
        <Grid.Col h="100%" opacity="1" md={6} className={classes.hiddenDesktop}>
          <Paper className={classes.left}>
            <Stack justify="center" align="center" spacing="xs" h="100%">
              <Title className={classes.hero_title}>
                The{' '}
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: 'green', to: 'cyan' }}
                >
                  Fanstatic
                </Text>{' '}
                Restaurant
              </Title>

              <Text className={classes.description}>
                Build fully functional accessible web applications with ease
              </Text>

              <Button
                variant="gradient"
                gradient={{ from: 'green', to: 'cyan' }}
                size="md"
                className={classes.control}
              >
                Get started
              </Button>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Login;
