'use client';

import Image from 'next/image';

const avatars = [
  {
    src: 'https://randomuser.me/api/portraits/men/47.jpg',
    className: 'absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white',
  },
  {
    src: 'https://randomuser.me/api/portraits/men/49.jpg',
    className: 'absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white',
  },
  {
    src: 'https://randomuser.me/api/portraits/women/46.jpg',
    className: 'absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white',
  },
  {
    src: 'https://randomuser.me/api/portraits/men/48.jpg',
    className: 'absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white',
  },
  {
    src: 'https://randomuser.me/api/portraits/women/43.jpg',
    className: 'rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-white relative',
  },
];

const AvatarGroup = () => {
  return (
    <div className="inline-flex items-end justify-center w-full text-center mx-auto relative h-24 md:h-28">
      {avatars.map((avatar, index) => (
        <div key={index} className={avatar.className}>
          <Image
            src={avatar.src}
            alt={`Avatar ${index + 1}`}
            width={96} // Large enough to cover the max width
            height={96}
            className="rounded-full"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;