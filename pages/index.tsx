import { MainForm } from '../components/MainForm';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle';
import { DataEty } from '../components/DataEty';
import { Grid, Tabs, MediaQuery, ScrollArea, Container } from '@mantine/core';

import { FaWikipediaW, FaEtsy } from 'react-icons/fa';

export default function HomePage() {
  return (
    <>
      {/* <MediaQuery largerThan={900} styles={{ visibility: 'hidden' }}>
      </MediaQuery> */}
      <Tabs position="center">
        <Tabs.Tab label="Wiktionary" icon={<FaWikipediaW size={20} />}></Tabs.Tab>
        <Tabs.Tab label="Nişanyan Sözlük" icon={<FaEtsy size={20} />}></Tabs.Tab>
      </Tabs>
      {/* <ColorSchemeToggle /> */}

      <MainForm />
      <DataEty />
    </>
  );
}
