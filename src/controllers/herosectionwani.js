import React, { useState, useEffect } from 'react';
import iraStadiumImage from '../assests/ira-stadium-glbanner.png';

function CustomSportsApparelSection() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <section className="bg-gray-100 py-16" style={{ backgroundImage: `url(${iraStadiumImage})` }}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-8 ${isAnimated ? 'animate-fadeInDown' : ''}`}>
          CUSTOM SPORTS APPAREL
        </h2>

        <p className={`text-lg text-center mb-8 ${isAnimated ? 'animate-fadeInUp' : ''}`}>
          Crafted to Perfection, Just for You! Each piece of clothing we create is custom made from start to finish, ensuring it meets your exact specifications. From selecting fabrics to applying finishing touches, we take pride in crafting high-quality sportswear tailored to your unique needs.
        </p>

        <div className="text-center mb-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Customize Your Apparel
          </button>
        </div>

        <div className="flex justify-center items-center">
          <div className={`flex space-x-4 ${isAnimated ? 'animate-fadeInUp' : ''}`}>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.001 14.001l3.536-3.536M4.094 7.052l9-9m0 0l9 9m-9-9h11m-11 0l9 9m0 0l-9-9" />
              </svg>
              <p className="text-gray-500">3-D Design Tool</p>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500">500+ Customizable Designs</p>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500">Within 3 Weeks Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomSportsApparelSection;