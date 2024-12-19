import React from "react";
import testidefault from "../assests/testdefault.png";

const testimonials = [
  {
    name: "Reviewer Name",
    role: "Job company",
    image: testidefault,
    feedback:
      "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
    rating: 4,
  },
  {
    name: "Reviewer Name",
    role: "Job company",
    image: testidefault,
    feedback:
      "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
    rating: 5,
  },
  {
    name: "Reviewer Name",
    role: "Job company",
    image: testidefault,
    feedback:
      "I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
    rating: 3,
  },
];

const Testimonialssimple = () => {
  return (
    <div className="container mx-auto text-center  py-16 px-6">
       <div className="max-w-full mx-auto text-center">
        <h1 className="text-4xl font-bold text-iraprimary mb-6">
          Stay Connected !
        </h1>
        <p className="text-iraprimaryb text-lg mb-12">
          Here from Our Happy Customers, Explore Behind-the-Scenes moments, and Join Our Community!
        </p>
      </div>
      <div className="container mx-auto text-center py-6 px-6 grid grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="grid m-4 p-4 text-center rounded-lg bg-white shadow-sm border border-slate-200">
            <div className="flex items-center m-4 gap-4 text-slate-800">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="relative inline-block h-[58px] w-[58px] rounded-full object-cover object-center"
              />
              <div className="flex w-full flex-col">
                <div className="flex items-center justify-between">
                  <h5 className="text-xl font-semibold text-slate-800">
                    {testimonial.name}
                  </h5>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-xs uppercase font-bold text-slate-500 mt-0.5 -ml-44">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-base text-slate-600 font-roboto font-bold text-justify leading-normal">
                &quot;{testimonial.feedback}&quot;
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Testimonialssimple;
