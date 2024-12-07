/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline"; // Heroicons
import iraLogo from "../assests/IRA Logos.png"; // Replace with your logo path

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

const WCU = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-sm font-bold text-gray-500">WHY CHOOSE US</h2>
      <p className="text-xl font-semibold mt-2">
        At IRA Sportswear, we embody{" "}
        <span className="text-blue-600">Manufacturing Excellence</span> to
        elevate athletes with Custom Sportswear
      </p>
      <div className="flex items-center justify-between mt-6">
        <h3 className="text-lg font-bold">FEATURES</h3>
        <img
          src={iraLogo}
          alt="IRA Sportswear Logo"
          className="h-16 w-20 ml-auto mr-28"
        />
        <h3 className="text-lg font-bold">OTHERS</h3>
      </div>
      <div className="mt-6 border-t border-gray-200">
        {features.map((feature, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="w-full flex justify-between items-center py-4 text-left"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium">{feature.title}</span>
              <div className="flex items-center space-x-40 ml-auto p-3">
                <CheckCircleIcon className="h-6 w-6 text-green-600" />
                <XCircleIcon className="h-6 w-6 text-gray-400" />
              </div>
              <span className="text-gray-500">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="pl-4">
                <div className="flex items-center space-x-4">
                  <h3 className="text-red-600 font-semibold mr-2">IRA</h3>
                  <p className="text-gray-600">{feature.iraDescription}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <h3 className="text-gray-600 font-semibold mr-2">Others</h3>
                  <p className="text-gray-600">{feature.othersDescription}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WCU;
