'use client';
import Divider from './components/Divider';
import Navbar from './components/Navbar';
import SecondaryNav from './components/SecondaryNav';

export default function Home() {
  return (
    <main className="mx-auto font-sans max-w-screen-3xl bg-gray-50 drop-shadow-lg">
      <Navbar />
      <Divider />
      <SecondaryNav />
    </main>
  );
}
