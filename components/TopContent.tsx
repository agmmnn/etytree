import { useState } from 'react';
import { Header, Group, ActionIcon, useMantineColorScheme, Anchor } from '@mantine/core';
import { DrawerRight } from './DrawerRight';
import { DrawerLeft } from './DrawerLeft';

import { FaWikipediaW, FaGithub } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

export function TopContent() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [openRight, setOpenRight] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);

  return (
    <>
      <DrawerLeft open={openLeft} />
      <DrawerRight open={openRight} />

      <Header height={46}>
        <Group sx={{ height: '100%' }} px={20} position="apart">
          <ActionIcon onClick={() => setOpenLeft(true)} variant="default" size={30}>
            <FaWikipediaW size={16} />
          </ActionIcon>
          <Group>
            <Anchor href="https://github.com/agmmnn/etytree" target="_blank">
              <ActionIcon variant="default" size={30}>
                <FaGithub size={16} />
              </ActionIcon>
            </Anchor>
            <ActionIcon onClick={() => setOpenRight(true)} variant="default" size={30}>
              <GiHamburgerMenu size={16} />
            </ActionIcon>
          </Group>
        </Group>
      </Header>
    </>
  );
}
