'use client';
import Divider from './components/Divider';
import Header from './components/Header';
import Navbar from './components/Navbar';
import SecondaryNav from './components/SecondaryNav';
import SectionWrapper from './components/SectionWrapper';

export default function Home() {
  return (
    <main className="mx-auto font-sans max-w-screen-3xl bg-white drop-shadow-lg">
      <Navbar />
      <Divider />
      <SecondaryNav />
      <Header />
      <SectionWrapper>
        <h4 className="mb-4 larger:text-2xl larger:leading-10">
          We make <span className="text-blue">Live</span>,{' '}
          <span className="text-blue">Push</span>,{' '}
          <span className="text-blue">Note</span> and{' '}
          <span className="text-blue">Link</span> — unique software and hardware
          for music creation and performance. With these products, our community
          of users creates amazing things.
        </h4>
        <p className="larger:text-lg">
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </SectionWrapper>
      <div className="h-screen">.</div>
    </main>
  );
}
