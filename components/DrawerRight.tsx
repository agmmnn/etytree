import { useState, useEffect } from 'react';
import { ColorSchemeToggle } from './ColorSchemeToggle';
import { Drawer, useMantineTheme, ActionIcon, Group, Anchor } from '@mantine/core';

export function DrawerRight({ open }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(open);
  }, [open]);

  return (
    <Drawer
      position="right"
      opened={opened}
      onClose={() => setOpened(false)}
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0}
    >
      <ColorSchemeToggle />
    </Drawer>
  );
}
