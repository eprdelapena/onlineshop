// components/ImageCarousel.js

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  'https://www.apetogentleman.com/wp-content/uploads/2020/03/preppy-brands.jpg',
  'https://cdn.prod.website-files.com/5d6fe845a10b7881ddcc9c9c/635639544d0d414c0bad916d_Picture15.png',
  'https://csclaundry.com/wp-content/uploads/2022/03/shutterstock_592066523-scaled.jpg',
  "https://wickedleeks.riverford.co.uk/wp-content/uploads/2022/06/Clothes-rails.jpg"
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Switch images every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
    <h1 className='text-black text-[1.5em] text-center'>Hottest trends</h1>
        <div className="relative w-full  h-[40em] overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transform: `translateX(${(index - currentIndex) * 100}%)`,
          }}
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            unoptimized
          />
        </div>
      ))}
    </div>
    </>

  );
};

export default ImageCarousel;
