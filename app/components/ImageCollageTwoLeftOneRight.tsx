import Image from 'next/image';

function ImageCollageTwoLeftOneRight() {
  return (
    <section className="relative flex items-center h-3/4vw mb-1/12vw">
      <div className="absolute h-3/4vw w-7/12 bg-green -z-10"></div>
      <div className="mx-1/12vw z-10">
        <Image
          src="https://ableton-production.imgix.net/about/photo-3.jpg?fit=crop"
          alt="whiteboard"
          width={160}
          height={120}
          className="mb-1/12vw h-1/4vw w-1/3vw object-cover"
        />
        <Image
          src="https://ableton-production.imgix.net/about/photo-4.jpg?fit=crop"
          alt="office building"
          width={160}
          height={120}
          className="h-1/4vw w-1/3vw object-cover"
        />
      </div>
      <Image
        src="https://ableton-production.imgix.net/about/photo-5.jpg?fit=crop"
        alt="studio"
        width={200}
        height={200}
        className="h-5/12vw w-5/12vw object-cover"
      />
    </section>
  );
}

export default ImageCollageTwoLeftOneRight;
