/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

//Defining the validation schema
const ContactSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(20),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(20),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters long")
    .max(200, "Message must not exceed 200 characters"),
});

const ContactUs = () => {
  //Initializing react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(ContactSchema) }); //Applying the validation schema

  //Function to handle form submission
  const onSubmit = (data) => {
    console.log("Form data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-white  text-dark  min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl px-4 py-8">
        <h2 className="text-center text-3xl font-bold p-2">Contact Us</h2>
        <p className="text-center text-lg mt-2 p-2">
          We&apos;re Here to Help: Reach Out for Inquiries, Support, and More.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-100  p-6 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                  {...register("firstName", { required: true })}
                  type="text"
                  placeholder="firstname"
                  className="w-full mt-1 p-2 bg-gray-100  text-dark rounded-lg border border-gray-300  focus:border-primary focus:outline-none"
                />
                {errors.firstName && (
                  <p style={{ color: "red" }}>{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  {...register("lastName", { required: true })}
                  type="text"
                  placeholder="lastname"
                  className="w-full mt-1 p-2 bg-gray-100  text-dark rounded-lg border
                  border-gray-300  focus:border-primary focus:outline-none"
                />
                {errors.lastName && (
                  <p style={{ color: "red" }}>{errors.lastName.message}</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium">Your Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="name@gmail.com"
                className="w-full mt-1 p-2 bg-gray-100  text-dark rounded-lg border border-gray-300  focus:border-primary focus:outline-none"
              />
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
              )}
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                {...register("phone", { required: true })}
                type="text"
                placeholder="+1234567890"
                className="w-full mt-1 p-2 bg-gray-100 text-dark rounded-lg border border-gray-300  focus:border-primary focus:outline-none"
              />
              {errors.phone && (
                <p style={{ color: "red" }}>{errors.phone.message}</p>
              )}
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium">Your Message</label>
              <textarea
                {...register("message", { required: true })}
                placeholder="Leave your message..."
                className="w-full mt-1 p-2 bg-gray-100 text-dark rounded-lg border border-gray-300 focus:border-primary focus:outline-none"
                rows="4"
              ></textarea>
              {errors.message && (
                <p style={{ color: "red" }}>{errors.message.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="mt-4 w-full border-2 border-red-600 text-dark  py-2 rounded-lg hover:bg-red-600 hover:text-white"
            >
              Send Message
            </button>
            <p className="text-sm mt-4 text-gray-600">
              By submitting this form you agree to our{" "}
              <span className="text-primary">terms and conditions</span> and{" "}
              <span className="text-primary">privacy policy</span>.
            </p>
          </form>

          <div className="space-y-8 mx-8 p-4">
            <div>
              <em className="text-lg font-medium">
                Reach out, let&apos;s turn your ideas into reality—together!
              </em>
              <p className="mt-3">
                Our team was handpicked for their understanding of materials,
                process and passion for fashion. Whether you are browsing our
                site or designing your jersey, we are always willing to share
                our deep knowledge and understanding of our makers and their
                craft.
              </p>
            </div>
            <div className="p-2">
              <em className="text-lg font-medium">Email us:</em>
              <p> info@irasportswear.com</p>
              <p> care@irasportswear.com</p>
            </div>
            <div className="p-2">
              <em className="text-lg font-medium">Call us:</em>
              <p>USA: +1 (847) 624 2660</p>
              <p>INDIA: +91 99946 56999, +91 98439 99906</p>
            </div>
            <div className="p-2">
              <p className="text-lg">
                The most commonly asked questions are covered in our{" "}
                <a href="#" className="underline">
                  FAQs
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
