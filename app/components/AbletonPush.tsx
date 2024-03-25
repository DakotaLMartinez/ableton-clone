import Image from 'next/image';

function AbletonPush() {
  return (
    <section className="flex relative h-7/12vw mb-1/12vw 3xl:h-[933px] 3xl:mb-[133px]">
      <div className="flex items-center w-1/2 pl-1/12vw 3xl:pl-[133px]">
        <Image
          src="https://ableton-production.imgix.net/about/photo-1.jpg?dpr=2&fit=crop&h=667&ixjsv=1.1.3&q=50&w=667"
          width={200}
          height={200}
          alt="Ableton Push"
          className="w-5/12vw h-5/12vw 3xl:w-[667px] 3xl:h-[667px]"
        />
      </div>
      <div className="flex items-center justify-end w-1/2 pr-1/12vw 3xl:pr-[133px]">
        <Image
          src="https://ableton-production.imgix.net/about/photo-2.jpg?dpr=2&fit=crop&h=400&ixjsv=1.1.3&q=50&w=533"
          width={160}
          height={120}
          alt="Woman walking blurred"
          className="w-1/3vw h-1/4vw 3xl:w-[533px] 3xl:h-[400px]"
        />
        <div className="absolute top-0 right-0 bg-yellow h-full w-7/12 -z-10"></div>
      </div>
    </section>
  );
}

export default AbletonPush;
