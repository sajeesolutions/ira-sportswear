import 'animate.css';
import iraStadiumImage from '../assests/ira-stadium-glbanner.png';
import { useMediaQuery } from 'react-responsive';

function HeroSection() 
{
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
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
        <div> <section className="relative w-full h-screen sm:h-[500px] md:h-[600px] lg:h-[700px] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-opacity-50" style={{ backgroundImage: `url(${iraStadiumImage})` }}>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white">
          <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            CUSTOM SPORTS APPAREL
          </h1>
          <p className="text-xl ml-32 mr-32 mb-8 text-justify animate__animated animate__fadeIn animate__delay-2s">
            <span className="font-bold">Crafted to Perfection, Just for You!</span> Each piece of clothing we create is custom made from start to finish, <br />
            ensuring it meets your exact specifications. From selecting fabrics to applying finishing touches, <br />
            we take pride in crafting high-quality sportswear tailored to your unique needs.
          </p>
          <a href="#services" className="bg-iraprimary px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-indigo-700 transform hover:scale-105">
            CUSTOMIZE YOUR APPAREL
          </a>
        </div>
      </section></div>
      )}
    </div>
   

  );
}

export default HeroSection;
