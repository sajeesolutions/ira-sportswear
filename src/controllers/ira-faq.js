import { useState } from "react";

const FAQ = () => {
  const faqs = [
    { question: "What is the minimum order quantity for a new order?", answer: "Our minimum order for a new order is 16 jerseys per style." },
    { question: "How long will my order take to ship?", answer: "An order typically takes approximately 3 weeks to ship from the date you confirm your order details. For larger orders, the shipping time may be longer. If you are considering placing a very large order, please email us your requirements, and we can advise on the turnaround time." },
    { question: "Do you maintain our order details incase we want to reorder the jerseys?", answer: "Yes, we maintain the order details to help customers reorder their jerseys and team uniforms." },
    { question: "What is the minimum order quantity for a new order?", answer: "Our minimum order for a new order is 16 jerseys per style." },
    { question: "How long will my order take to ship?", answer: "An order typically takes approximately 3 weeks to ship from the date you confirm your order details. For larger orders, the shipping time may be longer. If you are considering placing a very large order, please email us your requirements, and we can advise on the turnaround time." },
    { question: "Do you maintain our order details incase we want to reorder the jerseys?", answer: "Yes, we maintain the order details to help customers reorder their jerseys and team uniforms." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-gray-50 py-8">
        <div className="container mx-auto text-left">
        <h1 className="text-3xl flex font-irahelvetica font-bold text-iraprimaryb mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>
          Your Questions Answered
        </h1>
       
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 content-around max-w-screen-2xl mx-auto px-0">
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
      <div className="m-5">
      <a href="#services" className="bg-iraprimary px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-iraprimaryb text-white opacity-80 transform hover:scale-105">
        Visit Our FAQ      
      </a>
      </div>
    </section>
  );
};

export default FAQ;
