import AddCompanyButton from '@/app/components/add-company-button';
// import MagicButton from './components/magic-button';

export default function Home() {
  return (
    <main className="text-center m-6">
      <h1 className="text-3xl text-green-500 m-4">Home page</h1>
      <AddCompanyButton />
      {/* <MagicButton /> */}
    </main>
  );
}
