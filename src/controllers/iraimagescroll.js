import React from 'react';
import threeD from '../assests/3dcustom.png';
const ImageScroller = () => {
  const items = [
    { src: threeD, name: 'Image 1' },
    { src: threeD, name: 'Image 1' },
    { src: threeD, name: 'Image 1' },
    { src: threeD, name: 'Image 1' },
    { src: threeD, name: 'Image 1' },
    { src: threeD, name: 'Image 1' },
    { src: threeD, name: 'Image 1' },
    { src: threeD, name: 'Image 1' },
    { src: threeD, name: 'Image 1' },
    { src: threeD, name: 'Image 1' },
    { src: threeD, name: 'Image 1' },
    { src: threeD, name: 'Image 1' },
    { src: threeD, name: 'Image 1' },
    { src: threeD, name: 'Image 1' },
    { src: threeD, name: 'Image 1' },
    { src: threeD, name: 'Image 1' },
    { src: threeD, name: 'Image 1' },
  ];

  return (
    <div className="relative w-full overflow-hidden">
        <h1 class="m-2 p-2 ease-out font-bold leading-snug tracking-tight text-iraprimaryb bg-gradient-to-tr from-slate-800 to-slate-500 bg-clip-text mx-auto w-full text-2xl lg:max-w-3xl lg:text-5xl">
          sports
        </h1>
        <p>
            We Irasportswear ..
        </p>
      <div className="flex items-center space-x-6 animate-scroll">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.src}
              alt={item.name}
              className="w-200 h-200 object-cover rounded-md"
            />
            <p className="text-sm text-gray-600 mt-2">{item.name}</p>
          </div>
        ))}
        {/* Duplicate items for continuous scrolling */}
        {items.map((item, index) => (
          <div key={`duplicate-${index}`} className="flex flex-col items-center">
            <img
              src={item.src}
              alt={item.name}
              className="w-200 h-200 object-cover rounded-md"
            />
            <p className="text-sm text-gray-600 mt-2">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;
