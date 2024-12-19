import Header from './iraheader2.js';  
import HeroSection from './irahero.js';
import Pricesira from './iraprice.js';
import Testimonials3  from './ira-testimnoials3.js';
import Faqsection from './ira-faq.js';
import Latestevents from './latestevents.js';
import Footer from './irafooter.js';

function App() {
  return (
    <>
    <div className="inset-0 text-center rounded-lg h-100">
      <Header />
    </div>
    <div className="inset-0 text-center rounded-lg h-100">
      <HeroSection />
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
