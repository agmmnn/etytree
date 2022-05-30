import { Welcome } from '../components/MainForm';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle';
import { DataEty } from '../components/DataEty';

export default function HomePage() {
  return (
    <>
      <ColorSchemeToggle />
      <Welcome />
      <br />
      <DataEty />
    </>
  );
}
