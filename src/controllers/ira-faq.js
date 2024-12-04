import { useState } from "react";

const FAQ = () => {
  const faqs = [
    { question: "What is the minimum order quantity for a new order?", answer: "Our minimum order for a new order is 16 jerseys per style." },
    { question: "How long will my order take to ship?", answer: "An order typically takes approximately 3 weeks to ship from the date you confirm your order details. For larger orders, the shipping time may be longer. If you are considering placing a very large order, please email us your requirements, and we can advise on the turnaround time." },
    { question: "Do you maintain our order details incase we want to reorder the jerseys?", answer: "Yes, we maintain the order details to help customers reorder their jerseys and team uniforms." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16">
        <div className="container mx-auto text-left">
        <h1 className="text-4xl font-bold text-iraprimaryb mb-6">
        Your Questions Answered
        </h1>
       
      </div>
      <div className="max-w-7xl mx-auto px-6 text-center hidden">
        <h2 className="text-blue-600 text-lg font-semibold">FAQ</h2>
        <h3 className="text-3xl font-bold text-gray-900 mt-2">
          Any Questions? Look Here
        </h3>
        <p className="text-gray-500 mt-4">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 content-around max-w-screen-2xl mx-auto px-0">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between">
              <h4 className="text-iraprimary font-semibold text-lg">
                {faq.question}
              </h4>
              <span className="text-blue-600">
                <svg
                  className={`w-6 h-6 transform ${
                    openIndex === index ? "rotate-180" : ""
                  } transition-transform duration-200`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
            {openIndex === index && (
              <p className="text-iraprimaryb font-roboto text-justify font-bold text-sm mt-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
