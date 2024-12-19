import 'animate.css';
import React, { useState, useEffect } from 'react';
import iraStadiumImage from '../assests/ira-stadium-glbanner.png';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';


function HeroSection() 
{
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);
  return (
    <div>
     
      {isMobile ? (
        // Mobile-specific code here
        <div> <section className="relative w-full h-screen sm:h-[500px] md:h-[600px] lg:h-[700px] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-opacity-100" style={{ backgroundImage: `url(${iraStadiumImage})` }}>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white">
          <h1 hidden className="text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            CUSTOM SPORTS APPAREL
          </h1>
          <p className="text-xl ml-32 mr-32 mb-8 text-justify animate__animated animate__fadeIn animate__delay-2s">
            Crafted to Perfection, Just for You!
          </p>
          <a href="#services" className="bg-iraprimary px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-indigo-700 transform hover:scale-105">
            CUSTOMIZE YOUR APPAREL
          </a>
        </div>
      </section></div>
      ) : (
        // Desktop/tablet code here
        <div> 
          <section className="relative w-full h-screen sm:h-[500px] md:h-[600px] lg:h-[700px] bg-gray-900">
            <div className="absolute inset-0 z-0 bg-cover bg-center bg-opacity-50" style={{ backgroundImage: `url(${iraStadiumImage})` }}>
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
          
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white">
              <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
                CUSTOM SPORTS APPAREL
              </h1>
              <p className="text-xl ml-32 mr-32 mb-8 text-left animate__animated animate__fadeIn animate__delay-2s">
                <span className="font-content animate__animated animate__fadeIn animate__delay-3s pr-3">Crafted to Perfection, Just for You!</span>
                Each piece of clothing we create is custom made from start to finish, <br />
                ensuring it meets your exact specifications. From selecting fabrics to applying finishing touches, <br />
                we take pride in crafting high-quality sportswear tailored to your unique needs.
              </p>
              <Link to="/buildyourcontent" className="bg-iraprimary animate__animated animate__fadeIn animate__delay-2s px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-indigo-700 transform hover:scale-105">
                CUSTOMIZE YOUR APPAREL
              </Link>
              <div className="flex justify-center font-title mt-20 items-center">
                <div className={`flex space-x-4 ${isAnimated ? 'animate-fadeInUp' : ''}`}>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 pr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                    <p className="text-white text-xl animate-pulse">3-D Design Tool</p>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 p-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                    <p className="text-white text-xl animate-pulse">500+ Customizable Designs</p>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 p-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                    </svg>
                    <p className="text-white text-xl animate-pulse">Within 3 Weeks Delivery</p>
                  </div>
                </div>
              </div>
            </div>

            
          </section>
      </div>
      )}
    </div>
   

  );
}

export default HeroSection;
