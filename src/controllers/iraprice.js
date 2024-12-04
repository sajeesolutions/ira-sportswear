import React, { useState } from "react";

const TabsCustomAnimation = () => {
  const [activeTab, setActiveTab] = useState("html");

  const tabs = [
    {
      label: "Playing Shirts",
      value: "Playing Shirts",
      
    },
    {
      label: "Trouser",
      value: "Trouser",
      
    },
    {
      label: "Caps",
      value: "Caps",
      
    },
    {
      label: "Hats",
      value: "Hats",
     
    },
    {
      label: "Training T-Shirts",
      value: "Training T-Shirts",
      
    },
    {
      label: "Cricket Whites",
      value: "Cricket Whites",
      
    },
    {
      label: "Travel Jacket",
      value: "Travel Jacket",
      
    },
  ];

  return (
    <div className="content-cente w-full h-100 mx-auto">
        <h1 class="m-2 p-2 ease-out text-center font-bold leading-snug tracking-tight text-iraprimaryb bg-gradient-to-tr from-slate-800 to-slate-500 bg-clip-text mx-auto w-full text-2xl lg:max-w-3xl lg:text-5xl">
          Price Estimator
        </h1>
      {/* Tabs Header */}
      <div className="flex font-extralight text-justify text-7xl ml-10 mr-10 mt-4 mb-4 space-x-4 border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 text-3xl font-medium transition-colors duration-500 ${
              activeTab === tab.value
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="p-40 h-100">
        {tabs.map((tab) =>
          activeTab === tab.value ? (
            <div
              key={tab.value}
              className="transition-all duration-300 transform"
            >
              <p className="text-gray-700">{tab.content}
              <div className="grid grid-cols-2 gap-4 p-4 h-100">
                <div className="bg-gray-100 text-white p-4 rounded">{tab.Pictures}</div>
                <div style={{height: '400px'}} className="bg-white text-white p-4 rounded">{tab.elements}</div>
              </div>
              </p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default TabsCustomAnimation;
