'use client';
import Divider from './components/Divider';
import Header from './components/Header';
import Navbar from './components/Navbar';
import SecondaryNav from './components/SecondaryNav';

export default function Home() {
  return (
    <main className="mx-auto font-sans max-w-screen-3xl bg-white drop-shadow-lg">
      <Navbar />
      <Divider />
      <SecondaryNav />
      <Header />
      <Header />
      <Header />
      <Header />
    </main>
  );
}
