import { Welcome } from '../components/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle';
import { DataEty } from '../components/DataEty';

export default function HomePage() {
  return (
    <>
      <ColorSchemeToggle />
      <Welcome />
      <DataEty />
    </>
  );
}
