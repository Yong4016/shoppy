import React from 'react';

const Banner = () => {
  return (
    <section className='h-96 bg-yellow-900 relative'>
      <div className='w-full h-full bg-cover bg-banner opacity-80' />
      <div className='absolute w-full top-32 text-center text-gray-100 drop-shadow-sm'>
        <h2 className='text-6xl'>Elevate  Your Style</h2>
        <p className='text-2xl'>Premium Tes for Every Moment</p>
      </div>
    </section>
  );
};

export default Banner;
