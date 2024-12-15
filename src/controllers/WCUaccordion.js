/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import  {CheckCircleIcon, XCircleIcon}  from '@heroicons/react/24/outline';
import  Logo  from "../assests/IRA Logos.png";

const features = [
  {
    title: "Advanced 3D customization tool to create your team apparel",
    iraDescription: "Allows seamless 3D customization for apparel design.",
    othersDescription: "No 3D customization available.",
  },
  {
    title: "Intuitive and user-friendly Design Tool",
    iraDescription: "Simplifies designing with a smooth interface.",
    othersDescription: "Basic design tools with limited functionality.",
  },
  {
    title: "No extra costs for designing and customization support",
    iraDescription: "All design services included at no additional cost.",
    othersDescription: "Additional charges for designing services.",
  },
  {
    title: "24/7 dedicated customer service specialist team assistance",
    iraDescription: "Round-the-clock support from dedicated specialists.",
    othersDescription: "Customer support limited to business hours.",
  },
  {
    title: "Quick & on-time delivery with real-time package tracking",
    iraDescription: "Ensures timely delivery and live tracking updates.",
    othersDescription: "No real-time tracking available.",
  },
  {
    title: "High Performance premium fabric with advanced fabric technology",
    iraDescription:
      "Features like moisture-wicking, UV protection, and anti-static properties.",
    othersDescription: "Limited fabric options without advanced features.",
  },
];

const WCUaccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Apply hover behavior only for larger screens
  const handleMouseEnter = (index) => {
    if (window.innerWidth >= 1024) {
      setOpenIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setOpenIndex(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="border-l-4 border-red-600 my-10">
        <span className="font-bold text-gray text-sm pl-3 rubik">
          WHY CHOOSE US
        </span>
        <p className="text-lg md:text-xl font-semibold p-4 pt-2 text-center md:text-left inter">
          At IRA Sportswear, we embody{" "}
          <em className="text-indigo-900 inter">Manufacturing Excellence</em> to
          elevate athletes with Custom Sportswear.
        </p>
      </div>
      <div className="flex items-center justify-between mt-6">
        <h3 className="text-lg font-bold rubik">FEATURES</h3>
        <img
          src={Logo}
          alt="IRA Sportswear Logo"
          className="h-16 w-24 ml-auto mr-24 max-md:mr-6 max-md:p-3 max-md:pr-0 md:mr-32"
        />
        <h3 className="text-lg font-bold text-neutral-500 md:mr-32 rubik">
          OTHERS
        </h3>
      </div>
      <div className="mt-6 border-t border-neutral-300">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`border-b border-neutral-300 pb-4 pt-2 px-4 transition-all duration-300 cursor-pointer ${
              openIndex === index
                ? "bg-neutral-100 shadow-md"
                : "hover:bg-neutral-100 hover:shadow-sm"
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => toggleAccordion(index)} // Allow click for mobile/tablet
          >
            <div className="w-full flex items-center py-4">
              <span className="font-medium flex-1 inter">{feature.title}</span>
              <div className="flex items-center space-x-20 md:space-x-48 md:mr-32 md:ml-10 max-md:ml-5">
                <CheckCircleIcon className="h-8 w-8 text-indigo-900" />
                <XCircleIcon className="h-8 w-8 text-neutral-400" />
              </div>
            </div>

            {openIndex === index && (
              <div className="pl-4 mt-2">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="bg-indigo-900 text-white text-sm me-2 px-2.5 py-0.5 rounded rubik">
                    IRA
                  </span>
                  <p className="text-sm inter">{feature.iraDescription}</p>
                </div>
                <div className="flex flex-wrap gap-2 items-center mt-2">
                  <h3 className="text-neutral-600 font-semibold rubik">
                    Others-
                  </h3>
                  <p className="text-sm inter text-neutral-600">{feature.othersDescription}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WCUaccordion;
