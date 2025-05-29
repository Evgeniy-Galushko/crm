import AddCompanyButton from './components/add-company-button.jsx';
import MagicButton from './components/magic-button.jsx';

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Home page</h1>
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}
