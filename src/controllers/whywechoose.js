import React from 'react';
import IRA_Logos from '../assests/IRA_Logos.svg';
import threeD from '../assests/3dcustom.png';
import designcost from '../assests/design-cost.jpg';
import { useMediaQuery } from 'react-responsive';

function WhyChooseUs() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const cards = [
    {
      image: threeD,
      category: '3D Design Customization',
      logoimg : IRA_Logos,
      title: 'We offer an advanced 3D customization tool to create your team apparel in less than 5 minutes.',
      description: 'Standard design with 2D Visuals', 
    },
    {
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80',
        category: 'Design Interface',
        logoimg : IRA_Logos,
        title: 'Intuitive and user-friendly tool that helps Customers with instant design visualization and customization.',
        description: 'Complex and less interactive', 
      },
      {
        image: designcost,
        category: 'Design Costs',
        logoimg : IRA_Logos,
        title: 'No extra costs for design elements and customization support from our dedicated design team.',
        description: 'Often additional costs for design', 
      },
      {
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80',
        category: 'Customer Service',
        logoimg : IRA_Logos,
        title: '24/7 dedicated customer service specialist team to assist with your order submission and after-sales customer support.',
        description: 'Mostly not available and no after-sales support', 
      },
      {
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80',
        category: 'Product Delivery',
        logoimg : IRA_Logos,
        title: 'Quick and on-time delivery with real-time package tracking.',
        description: 'Unreliable timelines', 
      },
      {
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80',
        category: 'Quality',
        logoimg : IRA_Logos,
        title: 'High performance and premium fabric with moisture-wicking, UV protection, and anti-static properties.',
        description: 'Compromised quality for low cost delivery', 
      },
    
  ];

  return (
    <div>
      {isMobile ? (
        // Mobile-specific code here
        <div> 
            <h1 class="font-bold leading-snug tracking-tight bg-gradient-to-tr from-slate-800 to-slate-500 bg-clip-text text-transparent mx-auto w-full text-2xl lg:max-w-3xl lg:text-5xl">
  Why Choose Us
</h1>
        <section className="grid gap-16 mx-16 mb-16"> {/* Adjust margin for mobile */}
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col md:flex-row bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden">
            <div className="p-2.5 md:w-2/5 shrink-0">
              <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-full text-center">
                {card.category}
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
            </div>
            <div className="p-4">
              <h4 className="text-slate-800 text-xs font-bold mb-2">
                <img
                  src={card.logoimg}
                  alt="card-image"
                  className="h-20 w-20 rounded-md md:rounded-lg object-cover"
                />
                {card.title}
              </h4>
              <h4 className="mb-2 text-blue-500 text-xs text-left pl-3 font-bold">
                Others:
              </h4>
              <p className="mb-8 text-slate-600 leading-normal font-light">{card.description}</p>
            </div>
          </div>
        ))}
      </section></div>
      ) : (
        // Desktop/tablet code here
        <div>
        <h1 class="font-bold text-iraprimary leading-snug tracking-tight transition-all ease-out bg-gradient-to-tr from-slate-800 to-slate-500 bg-clip-text text-transparent mx-auto w-full text-2xl lg:max-w-3xl lg:text-5xl">
            Why Choose Us
        </h1>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-48 mr-48 mt-10 mb-10">
        {cards.map((card, index) => (
          <div key={index} style={{ height: '220px' }} className="relative grid-flow-row-dense flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
            <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
              <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-full text-center">
                {card.category}
              </div>
              <img
                src={card.image}
                alt="card-image"
                className="h-full w-full rounded-md md:rounded-lg object-cover"
              />
              
            </div>
            <div className="p-0">
              <h4 className="text-slate-800 text-xs font-bold text-justify ml-2 mb-2 mr-2">
              <img
                src={card.logoimg}
                alt="card-image"
                className="h-20 w-20 rounded-md md:rounded-lg object-cover"
              />
                  {card.title}
              </h4>
              <h4 className="mb-2 text-blue-500 text-xs text-left pl-3 font-bold">
                  Others: 
              </h4>
              <p className="mb-8 text-slate-600 leading-normal font-light">{card.description}</p>
             
            </div>
          </div>
        ))}
      </section></div>
      )}
    </div>
   
  );
}

export default WhyChooseUs;