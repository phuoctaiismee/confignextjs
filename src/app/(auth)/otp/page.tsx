'use client';

import {
  Anchor,
  Button,
  createStyles,
  Group,
  Paper,
  PinInput,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useRouter } from 'next/navigation';

const useStyles = createStyles((theme) => ({
  box: {
    width: '500px',
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
}));
const ConfirmOTP = () => {
  const router = useRouter();
  const { classes } = useStyles();
  return (
    <div className={classes.box}>
      <Paper className={classes.form} p={30}>
        <Stack justify="space-around" h="90%">
          <Stack spacing="sm" px="auto">
            <Title order={2} className={classes.title} ta="center" mt="md">
              Xác thực OTP
            </Title>
            <Text align="center" color="dimmed">
              Vui lòng xác thực OTP đã gửi về số điện thoại của bạn
            </Text>
          </Stack>
          <Stack spacing="none" px="auto">
            <Group position="center">
              <PinInput length={6} type="number" placeholder="" />
            </Group>
            <Text ta="center" mt="md">
              Nếu bạn chưa nhận được mã? <br /> Vui lòng nhấn{'  '}
              <Anchor<'a'>
                href="#"
                weight={700}
                color="red"
                onClick={(event) => event.preventDefault()}
              >
                Gửi lại mã
              </Anchor>
            </Text>
          </Stack>
          <Stack spacing="sm" px="auto">
            <Button fullWidth size="md" variant="gradient" gradient={{ from: 'green', to: 'cyan' }}>
              Xác thực
            </Button>
            <Anchor<'a'> onClick={() => router.push('/login')}>Quay lại</Anchor>
          </Stack>
        </Stack>
      </Paper>
    </div>
  );
};
export default ConfirmOTP;
