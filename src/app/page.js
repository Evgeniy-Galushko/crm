import AddCompanyButton from './components/add-company-button.jsx';
import ClientComponent from './components/client-component.jsx';
import ServerComponentCopy from './components/server-component copy.jsx';
import ServerComponent from './components/server-component.jsx';
import StatusLabelProps from './components/status-label.jsx';

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Home page</h1>
      <AddCompanyButton />
    </main>
  );
}
