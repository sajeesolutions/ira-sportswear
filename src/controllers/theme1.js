import Header from './iraheader.js';  
import Footer from './irafooter.js';
import HeroSection from './irahero.js';
import WhyChooseUs from './wcu.js';
import Pricesira from './iraprice.js';
//import ImageScroller from './iraimagescroll.js';
import GetReady from './getready.js';
import Sports from './irasports.js';
import Testimonials  from './ira-testimnoials.js';
import Testimonials2  from './ira-testimnoials2.js';
import Testimonials3  from './ira-testimnoials3.js';
import Faqsection from './ira-faq.js';
import Faqsection2 from './ira-faq2.js';
import PriceEstimator from './priceestimator.js';
import Latestevents from './latestevents.js';
import WCU from './wcuAccordion.js';

function App() {
  return (
    <>
    <div className="inset-0 text-center rounded-lg h-100">
      <Header />
    </div>
    <div className="relative inset-0 bg-cover bg-center bg-opacity-50">
      <HeroSection />
    </div>
  
    <div className="text-center h-100 m-5 p-5 border-spacing-1 border-l-current">
      <WCU />
      <WhyChooseUs />
    </div>

    <div className="bg-cover">
      <GetReady />
    </div>

    <div className="text-center bg-gray-800 h-100 border-spacing-1 border-l-current">
      <Sports />
    </div>

    <div className='bg-transparent bg-cover'>
      <Pricesira />
    </div>

    <div className="w-full text-center">
      <Faqsection />
    </div>
    
    <div className="bg-cover py-12 px-6">
      <Testimonials3 />
    </div>

    <div className="w-full text-center rounded-lg h-100">
      <Latestevents />
    </div> 
     
    <div className="text-center rounded-lg h-100 border-spacing-1 border-t-iraprimary">
      <Footer />
    </div>  
    </>
  );
}

export default App;
