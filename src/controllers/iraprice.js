import React, { useState } from "react";
import Collor from '../assests/collarsection1.png';

const TabbedLayout = () => {
  const [activeTab, setActiveTab] = useState("Playing shirts");
  
  const [hover, setHover] = useState(false);

  const tabs = [
    { name: "Playing shirts", content: "Product Addon images" },
    { name: "Trousers", content: "Product Addon images" },
    { name: "Caps", content: "Product Addon images" },
    { name: "Hats", content: "Product Addon images" },
    { name: "Training T-Shirts", content: "Product Addon images" },
    { name: "Cricket Whites", content: "Product Addon images" },
    { name: "Travel Jacket", content: "Product Addon images" },
  ];

  return (
    <div className="container mx-auto">
     
        <h1
        className={`text-4xl font-roboto mt-20 overflow-hidden text-iraprimaryb text-center font-bold transition-all duration-500 ease-in transform ${
          hover ? "text-blue-500 scale-110 opacity-100" : "scale-100 opacity-80"
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Price Estimator
      </h1>
      <div className="flex max-w-7xl mb-24 mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-1/4 bg-gray-100 p-6">
          <ul>
            {tabs.map((tab) => (
              <li
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`cursor-pointer px-4 py-3 text-gray-700 rounded-md mb-2 ${
                  activeTab === tab.name
                    ? "bg-white font-semibold border-l-4 border-blue-500"
                    : "hover:bg-gray-200"
                }`}
              >
                {tab.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content */}
        <div className="w-2/4 p-6">
          <h1 className="text-2xl font-bold mb-4">{activeTab}</h1>
          <p className="text-gray-600">{tabs.find((tab) => tab.name === activeTab)?.content}</p>

          {/* Example Numbered List */}
          {activeTab === "Playing shirts" && (
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <img
                    src={Collor}
                    alt="playing shirts"
                    className="w-100 h-100 object-cover bg-cover mb-4"
                  />
              </li>
            </ul>
          )}
        </div>
        <div className="w-1/4 p-6">
          <h1 className="text-2xl font-bold mb-4">{activeTab}</h1>
          <p className="text-gray-600">{tabs.find((tab) => tab.name === activeTab)?.content}</p>

          {/* Example Numbered List */}
          {activeTab !== "" && (
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
                  1
                </span>
                Price Var1
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
                  2
                </span>
                Price Var2
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
                  3
                </span>
                Price Var3
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabbedLayout;
