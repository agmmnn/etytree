import { Welcome } from '../components/MainForm';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle';
import { DataEty } from '../components/DataEty';
import { Container } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <ColorSchemeToggle />
      <Welcome />
      <br />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          backgroundColor: '#0d0e17',
          backgroundImage:
            '-webkit-repeating-radial-gradient(top center, rgba(255,255,255,.1), rgba(255,255,255,.1) 1px, transparent 0, transparent 100%)',
          backgroundSize: '20px 20px',
        }}
      >
        <DataEty />
      </div>
    </>
  );
}
