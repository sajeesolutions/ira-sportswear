import React, { useEffect, useRef } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import cricket from '../assests/cricket.png';
import football from '../assests/football.jpg';
import basketball from '../assests/basketball.jpg'; 
import gulf from '../assests/gulf.png';
import scatting from '../assests/scatting.png';
import swimming from '../assests/swimming.jpg';
import tennis from '../assests/tennis.png';

const categories = [
  { name: "Cricket", image: cricket },
  { name: "Football", image: football },
  { name: "Gulf", image: gulf },
  { name: "Scatting", image: scatting },
  { name: "Swimming", image: swimming },
  { name: "Tennis", image: tennis },
  { name: "Basketball", image: basketball },
  { name: "Cricket", image: cricket },
  { name: "Football", image: football },
  { name: "Gulf", image: gulf },
  { name: "Scatting", image: scatting },
  { name: "Swimming", image: swimming },
  { name: "Tennis", image: tennis },
  { name: "Basketball", image: basketball },
];

const AutoScrollCards = () => {
    const scrollContainerRef = useRef(null);
    const scrollIntervalRef = useRef(null);
    // Activate the polyfill
    smoothscroll.polyfill();

    const startScrolling = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({
            left: 300,
            behavior: "smooth",
          });
  
          const { scrollWidth, clientWidth, scrollLeft } = scrollContainerRef.current;
          if (scrollLeft + clientWidth >= scrollWidth) {
            scrollContainerRef.current.scrollTo({ left: 300, behavior: "smooth" });
          }
        }
      }, 1500);
    };
  
    const stopScrolling = () => {
      clearInterval(scrollIntervalRef.current);
    };
  
    useEffect(() => {
      startScrolling();
      return () => stopScrolling();
    }, []);
  
    return (
      <div className="bg-gray-50 py-12 px-6">
         <div className="text-center content-center">
            <h1 class="font-bold text-iraprimary text-center mx-auto w-full text-2xl lg:max-w-3xl lg:text-5xl">
                Sports
            </h1>
            <p className="text-iraprimaryb m-1 p-1">IRS Sportswear's custom sports gear enhances performance, ensures comfort and style, and fosters team unity across various athletic disciplines.</p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900"></h2>
            <a href="#" className="text-blue-500 hover:underline">
              Browse all Sports →
            </a>
          </div>
          <div
            ref={scrollContainerRef}
            onMouseEnter={stopScrolling}
            onMouseLeave={startScrolling}
            className="flex space-x-4 overflow-x-hidden scrollbar-hide"
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="min-w-[200px] bg-white shadow-md rounded-lg p-4 text-center flex flex-col items-center"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-40 h-40 object-cover bg-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
export default AutoScrollCards;
