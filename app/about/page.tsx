import React from 'react';
import Footer from '../components/common/footer/footer';

const Page = () => {
  return (
    <div className='flex flex-col'>
      <div className='text-[1.8em] font-light w-full text-black pl-5 py-8' style={{ fontFamily: 'sans-serif' }}>
        About ShopKeen
      </div>    
      <div className='mb-4 text-[1em] font-light text-black pl-5 md:w-[75%]' style={{ fontFamily: 'sans-serif' }}>
        {`At ShopKeen, we believe that online shopping should be an experience, not just a transaction. We’re here to redefine how you shop, making it more engaging and tailored to your unique style.`}
      </div>  
      <div className='text-[1em] font-light text-black pl-5 md:w-[75%]' style={{ fontFamily: 'sans-serif' }}>
        {`We curate products that resonate with your personal tastes and values. Our mission is to connect you with brands that share your passion for quality, sustainability, and innovation. Together, we can create a shopping journey that feels authentic and meaningful.`}
      </div>  
      <div className='mt-[10em] pl-5'>
        <Footer />
      </div>
    </div>
  );
}

export default Page;
