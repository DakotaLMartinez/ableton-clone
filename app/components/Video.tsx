import Image from 'next/image';
import { useState } from 'react';
import { IoPlaySharp } from 'react-icons/io5';

function Video({
  thumbnailUrl,
  videoUrl,
  caption,
}: {
  thumbnailUrl: string;
  videoUrl: string;
  caption: string;
}) {
  const [isClicked, setIsClicked] = useState(false);

  const renderVideo = () => {
    if (isClicked) {
      return (
        <iframe
          width="400"
          height="225"
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full aspect-video h-auto"
        ></iframe>
      );
    } else {
      return (
        <button
          className="relative block w-full"
          onClick={() => setIsClicked(true)}
        >
          <Image
            src={thumbnailUrl}
            alt="video thumbnail"
            width={400}
            height={225}
            className="w-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue text-white rounded-full p-5">
            <IoPlaySharp className="text-4xl relative left-1" />
          </span>
        </button>
      );
    }
  };
  return (
    <>
      {renderVideo()}
      <p className="font-semibold p-2.5 text-xs">{caption}</p>
    </>
  );
}

export default Video;
