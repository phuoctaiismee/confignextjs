'use client';

import { Title, Text, Anchor, Button, Center, Stack } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <Center>
      <Stack align="center" spacing="xl">
        <Title className={classes.title} align="center" mt={100}>
          Welcome to{' '}
          <Text inherit variant="gradient" component="span">
            FANSTATIC
          </Text>
        </Title>
        <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto">
          This starter Next.js project includes a minimal setup for server side rendering, if you
          want to learn more on Mantine + Next.js integration follow{' '}
          <Anchor href="https://mantine.dev/guides/next/" size="lg">
            this guide
          </Anchor>
          . To get started edit index.tsx file.
        </Text>
        <Link href="/login">
          <Button
            size="md"
            rightIcon={<IconArrowRight size="1rem" />}
            variant="gradient"
            gradient={{ from: 'teal', to: 'blue', deg: 60 }}
          >
            Order Now
          </Button>
        </Link>
      </Stack>
    </Center>
  );
}
