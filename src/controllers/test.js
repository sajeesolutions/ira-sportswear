import React from "react";

const PopoverHover = () => {
  const navigation = {
    categories: [
      {
        name: "Category 1",
        sections: [
          {
            name: "Section 1",
            items: [
              { name: "Item 1", href: "#" },
              { name: "Item 2", href: "#" },
            ],
          },
          {
            name: "Section 2",
            items: [
              { name: "Item 3", href: "#" },
              { name: "Item 4", href: "#" },
            ],
          },
        ],
      },
      {
        name: "Category 2",
        sections: [
          {
            name: "Section 3",
            items: [
              { name: "Item 5", href: "#" },
              { name: "Item 6", href: "#" },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <nav className="space-x-8">
        {navigation.categories.map((category) => (
          <div key={category.name} className="group relative inline-block">
            {/* Button Trigger */}
            <button className="text-gray-800 font-semibold group-hover:text-indigo-600">
              {category.name}
            </button>

            {/* Popover Panel */}
            <div
              className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-300"
            >
              <div>
                {category.sections.map((section) => (
                  <div key={section.name} className="mb-4">
                    <p className="font-bold text-gray-900 mb-2">
                      {section.name}
                    </p>
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-gray-700 hover:text-indigo-500"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default PopoverHover;
