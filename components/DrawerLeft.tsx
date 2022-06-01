import { useState, useEffect } from 'react';
import { Drawer, useMantineTheme, Tabs } from '@mantine/core';

import { FaWikipediaW, FaEtsy } from 'react-icons/fa';

export function DrawerLeft({ open }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(open);
  }, [open]);

  return (
    <Drawer
      position="left"
      opened={opened}
      onClose={() => setOpened(false)}
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="sm"
      transition="scale-x"
    >
      <Tabs variant="pills" position="center" orientation="vertical" grow>
        <Tabs.Tab label="Wiktionary" icon={<FaWikipediaW size={20} />}></Tabs.Tab>
        <Tabs.Tab label="Nişanyan Sözlük" icon={<FaEtsy size={20} />}></Tabs.Tab>
      </Tabs>
    </Drawer>
  );
}
