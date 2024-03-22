'use client';
import Image from 'next/image';
import MobileNavOverlay from './components/MobileNavOverlay';

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-3xl bg-gray-50 drop-shadow-lg">
      <MobileNavOverlay />
    </main>
  );
}
