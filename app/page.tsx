'use client';
import Image from 'next/image';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-3xl bg-gray-50 drop-shadow-lg">
      <Navbar />
    </main>
  );
}
