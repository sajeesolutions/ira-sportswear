import Header from './controllers/iraheader.js';  
import ContactUs from './views/contactpage.js';
import Footer from './controllers/irafooter.js';
import HeroSection from './controllers/irahero.js';
import WhyChooseUs from './controllers/wcu.js';
//import Pricesira from './controllers/iraprice.js';
//import ImageScroller from './controllers/iraimagescroll.js';
import GetReady from './controllers/getready.js';
import Sports from './controllers/irasports.js';
import Testimonials  from './controllers/ira-testimnoials.js';
import Testimonials2  from './controllers/ira-testimnoials2.js';
import Testimonials3  from './controllers/ira-testimnoials3.js';
import Faqsection from './controllers/ira-faq.js';
import Faqsection2 from './controllers/ira-faq2.js';
import PriceEstimator from './controllers/priceestimator.js';

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
      <WhyChooseUs />
    </div>

    <div className="bg-cover">
      <GetReady />
    </div>

    <div className="bg-cover">
      <Sports />
    </div>

    <div className="bg-cover">
      <Testimonials />
    </div>

    <div className="bg-cover">
      <Testimonials2 />
    </div>

    <div className="bg-cover">
      <Testimonials3 />
    </div>

    <div className="w-full text-center rounded-lg h-100">
      <Faqsection />
    </div>

    <div className="w-full text-center rounded-lg h-100">
      <Faqsection2 />
    </div>

    <div className="w-full text-center rounded-lg h-100">
     
    </div>

    <div className="text-center rounded-lg h-100">
      
    </div>
     
    <div className="text-center rounded-lg h-100 border-t-iraprimary">
      <Footer />
    </div>  
    </>
  );
}

export default App;
