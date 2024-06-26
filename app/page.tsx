'use client';
import ImageCollageTwoLeftOneRight from './components/ImageCollageTwoLeftOneRight';
import AbletonPush from './components/AbletonPush';
import Divider from './components/Divider';
import Header from './components/Header';
import Navbar from './components/Navbar';
import SecondaryNav from './components/SecondaryNav';
import SectionWrapper from './components/SectionWrapper';
import Video from './components/Video';
import Image from 'next/image';
import SmallLeftBigRight from './components/SmallLeftBigRight';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="mx-auto font-sans max-w-screen-3xl bg-white drop-shadow-lg">
      <Navbar />
      <Divider />
      <SecondaryNav />
      <Header />
      <SectionWrapper>
        <SectionWrapper.Header>
          We make <span className="text-blue">Live</span>,{' '}
          <span className="text-blue">Push</span>,{' '}
          <span className="text-blue">Note</span> and{' '}
          <span className="text-blue">Link</span> — unique software and hardware
          for music creation and performance. With these products, our community
          of users creates amazing things.
        </SectionWrapper.Header>
        <SectionWrapper.Paragraph>
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </SectionWrapper.Paragraph>
      </SectionWrapper>
      <AbletonPush />
      <SectionWrapper>
        <SectionWrapper.Header>
          Making music isn’t easy. It takes time, effort, and learning. But when
          you’re in the flow, it’s incredibly rewarding.
        </SectionWrapper.Header>
        <SectionWrapper.Paragraph>
          We feel the same way about making Ableton products. The driving force
          behind Ableton is our passion for what we make, and the people we make
          it for.
        </SectionWrapper.Paragraph>
      </SectionWrapper>
      <SectionWrapper>
        <Video
          thumbnailUrl="https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=compress"
          videoUrl="https://www.youtube.com/embed/9SbnhgjeyXA?enablejsapi=1&autoplay=1&widgetid=1"
          caption="Why Ableton - Juanpe Bolivar"
        />
      </SectionWrapper>
      <SectionWrapper>
        <SectionWrapper.Header>
          We are more than 350 people from 30 different countries divided
          between our headquarters in Berlin and our offices in Los Angeles and
          Tokyo.
        </SectionWrapper.Header>
        <SectionWrapper.Paragraph>
          Most of us are active musicians, producers, and DJs, and many of us
          use Live and Push every day. We come from a wide range of cultural and
          professional backgrounds. Some of us have PhDs, some are self-taught,
          and most of us are somewhere in between. What connects us is the
          shared belief that each of us has the skills and knowledge to
          contribute to something big: helping to shape the future of music
          culture.
        </SectionWrapper.Paragraph>
      </SectionWrapper>
      <ImageCollageTwoLeftOneRight />
      <SectionWrapper>
        <SectionWrapper.Header>
          We believe it takes focus to create truly outstanding instruments. We
          only work on a few products and we strive to make them great.
        </SectionWrapper.Header>
        <SectionWrapper.Paragraph>
          Rather than having a one-size-fits-all process, we try to give our
          people what they need to work their magic and grow. We’ve learned that
          achieving the best results comes from building teams that are richly
          diverse, and thus able to explore problems from a wider set of
          perspectives. We don’t always agree with each other, but opinion and
          debate are valued and openly encouraged.
        </SectionWrapper.Paragraph>
      </SectionWrapper>
      <div className="w-5/6 mx-auto mb-1/12vw">
        <Image
          src="https://ableton-production.imgix.net/about/poster-meet-the-makers.jpg?fit=crop&auto=format&fm=jpg"
          alt="meet the makers"
          width={400}
          height={225}
          className="w-full h-auto"
        />
      </div>

      <SectionWrapper>
        <SectionWrapper.Header>
          We’re passionate about what we do, but we’re equally passionate about
          improving who we are.
        </SectionWrapper.Header>
        <SectionWrapper.Paragraph>
          We work hard to foster an environment where people can grow both
          personally and professionally, and we strive to create a wealth of
          opportunities to learn from and with each other.
        </SectionWrapper.Paragraph>
        <SectionWrapper.Paragraph>
          Alongside an internal training program, employees are actively
          supported in acquiring new knowledge and skills, and coached on
          applying these in their daily work. In addition, staff-organized
          development and music salons are a chance to discuss new technologies,
          production techniques and best practices.
        </SectionWrapper.Paragraph>
      </SectionWrapper>
      <SmallLeftBigRight />
      <SectionWrapper>
        <SectionWrapper.Header>
          We want our employees to love it here. Since we’re looking for
          exceptional talent from around the world, we will do everything we can
          to make your transition as easy as possible.
        </SectionWrapper.Header>
        <SectionWrapper.Paragraph>
          If you&apos;re joining us in Berlin, we&apos;ll help with relocation
          and paperwork. We&apos;ll even provide you with free German or English
          lessons. Plus, working in Germany means you can expect comprehensive
          health insurance for you and your family, as well as generous
          maternity and paternity leave. Office hours are flexible, but
          it&apos;s not all work; we have several company and team outings
          throughout the year as well as a variety of fun, informal small-group
          activities.
        </SectionWrapper.Paragraph>
      </SectionWrapper>
      <JoinUs />
      <Divider />
      <Footer />
    </main>
  );
}
