import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8">
      {/* Left Side Text Section */}
      <div className="md:w-1/2 space-y-6 text-center">
        <h1 className="text-3xl font-bold ml-9 text-left font-irahelvetica text-iraprimary">Get Started!</h1>
        <p className="text-gray-900 font-roboto text-left m-5 p-5">
          At IRA sportswear, we’re dedicated to providing you with top-notch custom sports apparel that enhances your performance and showcases your unique style. Let’s get started on creating something amazing together!
        </p>

        <div className="space-y-4">
          <div>
            <h2 className="text-xl ml-9 text-iraprimaryb font-irahelvetica text-left font-semibold">Choose Your Sport & Apparels</h2>
            <p className="text-gray-800 font-roboto text-justify m-5 p-5">
              Explore our custom sports apparel collection, including jerseys, shorts, tracksuits, and accessories. Each category offers a variety of designs and styles to perfectly match your team’s needs.
            </p>
          </div>

          <div>
            <h2 className="text-xl ml-9 text-iraprimaryb font-irahelvetica text-left font-semibold">Customize Your Gear</h2>
            <p className="text-gray-800 font-roboto text-justify m-5 p-5">
              Use our intuitive 3D design tool to choose colors, add logos, and include player names and numbers. Preview in real-time to ensure it meets your expectations before finalizing.
            </p>
          </div>

          <div>
            <h2 className="text-xl ml-9 text-iraprimaryb font-irahelvetica text-left font-semibold">Place Your Order</h2>
            <p className="text-gray-800 font-roboto text-justify m-5 p-5">
              Once satisfied with the design, add items to your cart, review for accuracy, and proceed to checkout. Upon order submission, you will receive an order confirmation with the expected delivery date and payment terms.
            </p>
          </div>
        </div>

        <button className="bg-iraprimary text-center font-irahelvetica text-white py-2 px-4 rounded-md hover:bg-iraprimaryb hover:text-white">
          Customize Your Apparel
        </button>
      </div>

      {/* Right Side Image Placeholder */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
        <div className="w-full h-px max-h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-lg">Image Placeholder</span>
        </div>
      </div>


    </div>
  );
};

export default App;
