import StatusLabelProps from './components/status-label.jsx';

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Home page</h1>
      <StatusLabelProps status={'active'}>Active</StatusLabelProps>
      <StatusLabelProps status={'notActive'}>Not active</StatusLabelProps>
      <StatusLabelProps status={'pending'}>Pending</StatusLabelProps>
      <StatusLabelProps status={'suspended'}>Suspended</StatusLabelProps>
    </main>
  );
}
