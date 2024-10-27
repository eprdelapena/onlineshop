import React from 'react';

const Page = () => {
  return (
    <>
      <div className='flex flex-col px-8 items-center justify-between bg-pink-50 w-full'>
        <div className='text-[1.8em] font-light w-full text-black pl-5 py-8' style={{ fontFamily: 'sans-serif' }}>
          Welcome to ShopKeen!
        </div>
        <div className='lg:pr-0 pl-5 mb-[2em]'>
          <p className='text-black' style={{ fontFamily: 'sans-serif' }}>
            {`At ShopKeen, we believe that shopping should be an exciting and enjoyable experience. Our online store is designed with you in mind, offering a curated selection of high-quality products across various categories, including fashion, home goods, electronics, and more`}
          </p>
        </div>
      </div>
      <div className='mt-3  lg:pr-0 px-8 mb-2 flex    flex-col'>
        <div className='w-[16em] items-center flex h-[2.3em] text-white bg-pink-600 rounded-full relative'>
          <div className='w-[0.5em] ml-2 mr-2 animate-pulse h-[0.5em] rounded-full bg-green-500'></div>
          <p className='text-white'>Currently Available</p>
          <div className='flex items-center justify-center border-white border-[1px] cursor-pointer border-solid w-[5em] group hover:bg-pink-600 transition h-[1.8em]  left-[67%] top-[10%] bg-green-500 rounded-full absolute'>
            <p className="text-black text-[0.9em] group-hover:text-white" style={{ fontFamily: 'sans-serif' }}>Book now</p>
          </div>
        </div>
        {/* <Footer/> */}
      </div>

      <div className='px-8'>
        <h2 className="text-3xl font-semibold my-4 text-pink-600">Why ShopKeen?</h2>
        <ul className="list-none space-y-4 mb-6">
          <li className="flex items-start space-x-2">
            <span role="img" aria-label="star" className="text-pink-500">🌟</span>
            <div>
              <strong className="text-pink-600">Quality Assurance:</strong> We handpick every item to ensure you receive only the best.
            </div>
          </li>
          <li className="flex items-start space-x-2">
            <span role="img" aria-label="shopping bag" className="text-pink-500">🛍️</span>
            <div>
              <strong className="text-pink-600">Diverse Selection:</strong> <p className='text-black'>Whether you&apos;re looking for trendy apparel or the latest gadgets, we have something for everyone.</p>
            </div>
          </li>
          <li className="flex items-start space-x-2">
            <span role="img" aria-label="handshake" className="text-pink-500">🤝</span>
            <div>
              <strong className="text-pink-600">Customer-Centric:</strong> <p className='text-black'>Your satisfaction is our top priority. Our dedicated support team is here to help you with any questions or concerns.</p>
            </div>
          </li>
          <li className="flex items-start space-x-2">
            <span role="img" aria-label="globe" className="text-pink-500">🌐</span>
            <div>
              <strong className="text-pink-600">Easy Navigation:</strong> <p className='text-black'>Our user-friendly website makes finding what you need a breeze.</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Page;
