import React from 'react';
import IRA_Logos from '../assests/IRA_Logos.svg';

function WhyChooseUs() {
  const cards = [
    {
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80',
      category: '3D Design Customization',
      logoimg : IRA_Logos,
      title: 'We offer an advanced 3D customization tool to create your team apparel in less than 5 minutes.',
      description: 'Standard design with 2D Visuals', 
    },
    {
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80',
        category: '3D Design Customization',
        logoimg : IRA_Logos,
        title: 'We offer an advanced 3D customization tool to create your team apparel in less than 5 minutes.',
        description: 'Standard design with 2D Visuals', 
      },
      {
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80',
        category: '3D Design Customization',
        logoimg : IRA_Logos,
        title: 'We offer an advanced 3D customization tool to create your team apparel in less than 5 minutes.',
        description: 'Standard design with 2D Visuals', 
      },
      {
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80',
        category: '3D Design Customization',
        logoimg : IRA_Logos,
        title: 'We offer an advanced 3D customization tool to create your team apparel in less than 5 minutes.',
        description: 'Standard design with 2D Visuals', 
      },
      {
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80',
        category: '3D Design Customization',
        logoimg : IRA_Logos,
        title: 'We offer an advanced 3D customization tool to create your team apparel in less than 5 minutes.',
        description: 'Standard design with 2D Visuals', 
      },
      {
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80',
        category: '3D Design Customization',
        logoimg : IRA_Logos,
        title: 'We offer an advanced 3D customization tool to create your team apparel in less than 5 minutes.',
        description: 'Standard design with 2D Visuals', 
      },
    
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-48 mr-48 mt-10 mb-10">
      {cards.map((card, index) => (
        <div key={index} style={{ height: '200px' }} className="relative grid-flow-row-dense flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
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
    </section>
  );
}

export default WhyChooseUs;