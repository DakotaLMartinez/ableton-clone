import Image from 'next/image';

function SmallLeftBigRight() {
  return (
    <section className="relative h-7/12vw 3xl:h-[933px] mb-1/12vw">
      <div className="absolute h-full w-2/3 left-1/6vw 3xl:left-[267px] 3xl:w-[1066px] bg-purple -z-10"></div>
      <div className="flex items-center h-full pl-1/12vw 3xl:pl-[133px] z-10">
        <Image
          src="https://ableton-production.imgix.net/about/photo-6-a.jpg?fit=crop"
          alt="office building"
          width={160}
          height={120}
          className="h-1/4vw w-1/3vw 3xl:h-[400px] 3xl:w-[533px] object-cover"
        />
        <Image
          src="https://ableton-production.imgix.net/about/photo-7.jpg?fit=crop"
          alt="studio"
          width={200}
          height={200}
          className="h-5/12vw w-5/12vw ml-1/6vw 3xl:h-[667px] 3xl:w-[667px] 3xl:ml-[266px] object-cover"
        />
      </div>
    </section>
  );
}

export default SmallLeftBigRight;
