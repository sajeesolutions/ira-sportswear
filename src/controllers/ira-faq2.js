import React from 'react';

function FAQCard({ question, answer }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center mb-2">
        <div className="bg-blue-500 text-white rounded-full p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>

        </div>
        <h2 className="text-lg font-medium ml-2 font-roboto text-iraprimary">{question}</h2>
      </div>
      <p className="text-iraprimaryb font-roboto text-lg ml-12">{answer}</p>
    </div>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "What is the minimum order quantity for a new order?",
      answer: "Our minimum order for a new order is 16 jerseys per style."
    },
    {
      question: "How long will my order take to ship?",
      answer: "An order typically takes approximately 3 weeks to ship from the date you confirm your order details. For larger orders, the shipping time may be longer. If you are considering placing a very large order, please email us your requirements, and we can advise on the turnaround time."
    },
    {
      question: "Do you maintain our order details incase we want to reorder the jerseys?",
      answer: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post."
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-20">
      <div className="container mx-auto text-left">
        <h1 className="text-4xl font-bold text-iraprimaryb mb-6">
        Your Questions Answered
        </h1>
        </div>
      <div className="grid grid-cols-2 gap-4 text-justify p-10 m-5">
        {faqs.map((faq, index) => (
          <FAQCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default FAQSection;