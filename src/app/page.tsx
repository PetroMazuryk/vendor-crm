import StatusLable, { Status } from './components/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold ">Home Page</h1>
      <StatusLable status={Status.Active}>Active</StatusLable>
      <StatusLable status={Status.NotActive}>Not Active</StatusLable>
      <StatusLable status={Status.Pending}>Pending</StatusLable>
      <StatusLable status={Status.Suspended}>Suspended</StatusLable>
    </main>
  );
}
