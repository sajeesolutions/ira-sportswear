import React, { useState } from "react";

const TabsCustomAnimation = () => {
  const [activeTab, setActiveTab] = useState("html");

  const tabs = [
    {
      label: "HTML",
      value: "html",
      content: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "React",
      value: "react",
      content: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Vue",
      value: "vue",
      content: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Angular",
      value: "angular",
      content: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Svelte",
      value: "svelte",
      content: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
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
      <div className="p-4">
        {tabs.map((tab) =>
          activeTab === tab.value ? (
            <div
              key={tab.value}
              className="transition-all duration-300 transform"
            >
              <p className="text-gray-700">{tab.content}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default TabsCustomAnimation;
