import React from "react";

const Footer = () => {
  return (
    <footer className='w-full flex flex-col lg:flex-row items-center h-96 gap-5'>
      <div className='flex w-full lg:w-1/2'>
        <div className='flex flex-col gap-2 '>
          <p className='font-bold'>Fiber</p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quae incidunt quos
            doloremque dignissimos quas mollitia quam ratione sint repudiandae, minus a aspernatur!
            Labore mollitia maiores quis aspernatur ipsum unde.
          </span>
          <span className='font-bold text-indigo-500'>Made for Shattel Challange</span>
        </div>
      </div>
      <div className='flex w-full'>
        <div className='w-1/4 flex flex-col gap-3'>
          <p className='font-bold'>Site Map</p>
          <span>Home Page</span>
          <span>Pricing</span>
          <span>Testinmonials</span>
          <span>Features</span>
        </div>
        <div className='w-1/4 flex flex-col gap-2'>
          <p className='font-bold'>Resoureces</p>
          <span>Home Page</span>
          <span>Pricing</span>
          <span>Testinmonials</span>
          <span>Features</span>
        </div>
        <div className='w-1/4 flex flex-col gap-2'>
          <p className='font-bold'>Company</p>
          <span>Home Page</span>
          <span>Pricing</span>
          <span>Testinmonials</span>
          <span>Features</span>
        </div>
        <div className='w-1/4 flex flex-col gap-2'>
          <p className='font-bold'>Portfollio</p>
          <span>Home Page</span>
          <span>Pricing</span>
          <span>Testinmonials</span>
          <span>Features</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
