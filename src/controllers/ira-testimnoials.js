import React from "react";
import testidefault from "../assests/testdefault.png";

const testimonials = [
  {
    name: "Reviewer Name",
    role: "Position",
    feedback:
      "This platform has completely transformed the way we work. The team loves it!",
    image: testidefault,
  },
  {
    name: "Reviewer Name",
    role: "Position",
    feedback:
      "A game-changer for our marketing campaigns. I can’t imagine going back to the old tools!",
    image: testidefault,
  },
  {
    name: "Reviewer Name",
    role: "Position",
    feedback:
      "The ease of use and incredible features make this my go-to tool for all my projects.",
    image: testidefault,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-iraprimary mb-6">
          Stay Connected !
        </h1>
        <p className="text-iraprimaryb text-lg mb-12">
          Here from Our Happy Customers, Explore Behind-the-Scenes moments, and Join Our Community!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 text-sm">{testimonial.role}</p>
              <p className="text-gray-700 mt-4 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
