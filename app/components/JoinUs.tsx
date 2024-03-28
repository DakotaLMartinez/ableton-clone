import Image from 'next/image';
import { MdChevronRight } from 'react-icons/md';
import SectionWrapper from './SectionWrapper';

function JoinUs() {
  return (
    <section className="flex flex-col xl:flex-row mx-1/12vw 3xl:mx-[133px] pb-1/12vw 3xl:pb-[133px]">
      <Image
        src="https://ableton-production.imgix.net/about/photo-8.jpg?fit=crop&crop=right"
        alt="Ableton Offices"
        width={400}
        height={267}
        className="w-full h-1/2vw xl:w-5/12vw xl:h-5/12vw 3xl:w-[667px] 3xl:h-[667px] object-cover object-right"
      />
      <div className="bg-lightblue p-1/12vw 3xl:p-[133px] xl:flex xl:flex-col xl:justify-center">
        <SectionWrapper.Header>
          We’re really proud of the work we’ve done so far. But there’s so much
          more to come. If you’d like to be a part of it, please join us.
        </SectionWrapper.Header>

        <SectionWrapper.Header>
          <a href="#" className="text-blue flex items-center font-medium">
            See latest jobs <MdChevronRight className="" />
          </a>
        </SectionWrapper.Header>
      </div>
    </section>
  );
}

export default JoinUs;
