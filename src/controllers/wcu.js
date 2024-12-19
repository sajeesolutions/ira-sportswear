import React from "react";

const IconicGrid = () => {
  return (
    <div className="container text-center content-center mx-auto">
    <div className="text-center content-center">
        <h1 class="font-bold text-iraprimary text-center mx-auto w-full text-2xl lg:max-w-3xl lg:text-5xl">
            Why Choose Us
        </h1>
        <p className="text-iraprimaryb m-1 p-1">Empowering Athletes with Customized Excellence</p>
      </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
      
      {/* 3D Design Customization */}
      <div className="rounded-lg p-6 flex flex-col items-center text-justify">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
        
        <h2 className="text-lg font-bold text-iraprimaryb mb-2">
          3D Design Customization
        </h2>
        <h3 className="text-xl font-bold mb-2">
          IRA Sportswear
        </h3>
        <p className="text-gray-800">
          We offer an advanced 3D customization tool to create your team apparel
          in less than 5 minutes.
        </p>
        <div className="mt-4">
          <span className="text-sm font-semibold text-gray-400">
            Others: Standard design with 2D Visuals
          </span>
        </div>
      </div>

      {/* Design Interface */}
      <div className="rounded-lg p-6 flex flex-col items-center text-justify">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
        </svg>


        <h2 className="text-lg font-bold text-iraprimaryb mb-2">
          Design Interface
        </h2>
        <h3 className="text-xl font-bold mb-2">
          IRA Sportswear
        </h3>
        <p className="text-gray-800">
          Intuitive and user-friendly tool that helps customers with instant
          design visualization and customization.
        </p>
        <div className="mt-4">
          <span className="text-sm font-semibold text-gray-400">
            Others: Complex and less interactive
          </span>
        </div>
      </div>

       {/* Design Costs */}
       <div className="rounded-lg p-6 flex flex-col items-center text-justify">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
       </svg>


        <h2 className="text-lg font-bold text-iraprimaryb mb-2">
          Design Costs
        </h2>
        <h3 className="text-xl font-bold mb-2">
          IRA Sportswear
        </h3>
        <p className="text-gray-800">
          No extra costs for design elements and customization support from our dedicated design team.
        </p>
        <div className="mt-4">
          <span className="text-sm font-semibold text-gray-400">
            Others: Often additional costs for design
          </span>
        </div>
      </div>

       {/* Customer Service */}
       <div className="rounded-lg p-6 flex flex-col items-center text-justify">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
       </svg>


        <h2 className="text-lg font-bold text-iraprimaryb mb-2">
          Customer Service
        </h2>
        <h3 className="text-xl font-bold mb-2">
          IRA Sportswear
        </h3>
        <p className="text-gray-800">
          24/7 dedicated customer service specialist team to assist with your order submission and after-sales customer support.
        </p>
        <div className="mt-4">
          <span className="text-sm font-semibold text-gray-400">
            Others: Mostly not available and no after-sales support
          </span>
        </div>
      </div>

       {/* Product Delivery */}
       <div className="rounded-lg p-6 flex flex-col items-center text-center">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
       </svg>

        <h2 className="text-lg font-bold text-iraprimaryb mb-2">
          Product Delivery
        </h2>
        <h3 className="text-xl font-bold mb-2">
          IRA Sportswear
        </h3>
        <p className="text-gray-800 text-justify">
          Quick and on-time delivery with real-time package tracking.
        </p>
        <div className="mt-4">
          <span className="text-sm font-semibold text-gray-400">
            Others: Unreliable timelines
          </span>
        </div>
      </div>

       {/* Quality */}
       <div className="rounded-lg p-6 flex flex-col items-center text-center">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
       </svg>
        <h2 className="text-lg font-bold text-iraprimaryb mb-2">
          Quality
        </h2>
        <h3 className="text-xl font-bold mb-2">
          IRA Sportswear
        </h3>
        <p className="text-gray-800 text-justify">
          High performance and premium fabric with moisture-wicking, UV protection, and anti-static properties.
        </p>
        <div className="mt-4">
          <span className="text-sm font-semibold text-gray-400">
            Others: Compromised quality for low cost delivery
          </span>
        </div>
      </div>

    </div>
    </div>
  );
};

export default IconicGrid;
