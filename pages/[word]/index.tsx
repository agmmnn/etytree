import { useRouter } from 'next/router';

export default function Wordy() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>word: {router.query.word}</h1>
    </div>
  );
}
