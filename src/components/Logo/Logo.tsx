import { Avatar, createStyles, Group, Stack, Text, UnstyledButton } from '@mantine/core';
import { useRouter } from 'next/navigation';

const useStyles = createStyles(() => ({}));
export function Logo() {
  const router = useRouter();
  const { theme } = useStyles();
  return (
    <UnstyledButton onClick={() => router.push('/')}>
      <Group spacing="xs">
        <Avatar size={40} src="/Logomark.svg" color={theme.primaryColor} />
        <Stack align="flex-start" spacing="sx">
          <Text size="xl" fw="bold" lh="20px">
            Fanstatic
          </Text>
          <Text size="xs" color="dimmed">
            the restaurant
          </Text>
        </Stack>
      </Group>
    </UnstyledButton>
  );
}
