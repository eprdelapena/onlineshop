import React from 'react';
import Footer from '../components/common/footer/footer';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
const Page = () => {
  const choices = [
    { id: 1, name: "Men's clothes", price: '$10', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-4xBdVDWVv9B_AogOH3atcHxBZ23OMMjMw&s' },
    { id: 2, name: "Women's clothes", price: '$15', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWgsOOXXxB92elUs3_S572oJ3EGPycMqrcTw&s' },
    { id: 3, name: 'Makeup', price: '$20', imgSrc: 'https://cdn-icons-png.flaticon.com/512/10786/10786565.png' },
    { id: 4, name: 'Shoes', price: '$25', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlH0wkbBdTVfrIaVCtFQ3syfh1YS6IpFGEg&s' },
    { id: 5, name: 'Products', price: '$30', imgSrc: 'https://media.gettyimages.com/id/511991248/vector/smartphone-with-app-icons.jpg?s=1024x1024&w=gi&k=20&c=A6TkAycYYsxKAqai9f1t-Vj0QsTX94LYpCfl2E5Fr4E=' },
  ];


  return (
    <div className='flex flex-col '>
      <div className="border border-gray-300 mt-5 px-4 pb-4 pt-2 ml-5 rounded-lg bg-gradient-to-r from-green-400 to-pink-400">
        <h2 className="text-lg text-black mb-4">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {choices.map((choice) => (
            <div
              key={choice.id}
              className="border border-gray-200 group hover:bg-yellow-500/50 transition cursor-pointer rounded-md p-3 flex flex-col justify-between hover:shadow-md bg-transparent"
            >
              <Image
                src={choice.imgSrc}
                alt={choice.name}
                width={120}
                height={120}
                className="w-full bg-white object-cover mb-2 rounded-md"
                unoptimized
              />
              <p className="text-black text-[1em] group-hover:font-bold group-hover:text-white text-center">{choice.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-x-5 font-light w-full text-black pl-5 py-8' style={{ fontFamily: 'sans-serif' }}>
  <div className='flex-1 shrink flex flex-col'>
    <div className='w-full flex flex-col'>
      <div className='text-black text-[1em]'>Add to cart</div>
      <div className='flex flex-col md:flex-row gap-x-2 w-full'>
        <div className="border bg-gradient-to-r from-green-400 to-pink-400 border-gray-200 group hover:bg-yellow-500/50 transition cursor-pointer rounded-md p-3 flex flex-col justify-between hover:shadow-md bg-transparent">
          <Image
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRjawheyKIUGbGQwq-8sjV_OqKSwJzh3Q0g&s`}
            alt="Converse"
            width={120}
            height={120}
            className="w-full bg-white object-cover mb-2 rounded-md"
            unoptimized
          />
          <p className="text-black text-[1em] text-center">Converse</p>
        </div>
        <div className="border border-gray-200 bg-gradient-to-r from-green-400 to-pink-400 group hover:bg-yellow-500/50 transition cursor-pointer rounded-md p-3 flex flex-col justify-between hover:shadow-md bg-transparent">
          <Image
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNcpJ2ZEFk_CP8fETJ-RVV2NYSeAok3oNwg&s`}
            alt="Dress"
            width={120}
            height={120}
            className="w-full bg-white object-cover mb-2 rounded-md"
            unoptimized
          />
          <p className="text-black text-[1em] text-center">Dress</p>
        </div>
      </div>
    </div>
  </div>
  
  <div className='flex-1 flex flex-col gap-y-2 shrink'>
    <div className='text-black text-[1em]'>Recent Search</div>

    <div className="flex items-center bg-gradient-to-r from-green-400 to-pink-400 border border-gray-500 rounded-lg">
      <input
        type="text"
        className="pl-1 w-full text-black bg-gradient-to-r from-green-400 to-pink-400 border-none focus:outline-none placeholder-white"
        placeholder="Converse"
      />
      <button className="p-2 bg-black text-white rounded-r">
        <FaSearch />
      </button>
    </div>

    <div className="flex items-center bg-gradient-to-r from-green-400 to-pink-400 border border-gray-500 rounded-lg">
      <input
        type="text"
        className="pl-1 w-full text-black bg-gradient-to-r from-green-400 to-pink-400 border-none focus:outline-none placeholder-white"
        placeholder="Pink Dress"
      />
      <button className="p-2 bg-black text-white rounded-r">
        <FaSearch />
      </button>
    </div>

    <div className="flex items-center bg-gradient-to-r from-green-400 to-pink-400 border border-gray-500 rounded-lg">
      <input
        type="text"
        className="pl-1 w-full text-black bg-gradient-to-r from-green-400 to-pink-400 border-none focus:outline-none placeholder-white"
        placeholder="Cellphone"
      />
      <button className="p-2 bg-black text-white rounded-r">
        <FaSearch />
      </button>
    </div>
  </div>

  <div className='flex-1 flex flex-col shrink'>
    <div className='text-black text-[1em]'>Top</div>
    <div className='flex flex-col md:flex-row gap-x-2 w-full'>
    <div className="border bg-gradient-to-r from-green-400 to-pink-400 border-gray-200 group hover:bg-yellow-500/50 transition cursor-pointer rounded-md p-3 flex flex-col justify-between hover:shadow-md bg-transparent">
          <Image
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRjawheyKIUGbGQwq-8sjV_OqKSwJzh3Q0g&s`}
            alt="Converse"
            width={120}
            height={120}
            className="w-full bg-white object-cover mb-2 rounded-md"
            unoptimized
          />
          <p className="text-black text-[1em] text-center">Converse</p>
        </div>
        <div className="border border-gray-200 bg-gradient-to-r from-green-400 to-pink-400 group hover:bg-yellow-500/50 transition cursor-pointer rounded-md p-3 flex flex-col justify-between hover:shadow-md bg-transparent">
          <Image
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNcpJ2ZEFk_CP8fETJ-RVV2NYSeAok3oNwg&s`}
            alt="Dress"
            width={120}
            height={120}
            className="w-full bg-white object-cover mb-2 rounded-md"
            unoptimized
          />
          <p className="text-black text-[1em] text-center">Dress</p>
        </div>
    </div>
  </div>
</div>

<div className='w-full pl-5 h-[14em] '>
<Image
            src={`https://img.freepik.com/free-vector/pink-opening-soon-background-realistic-design_52683-20484.jpg`}
            alt="Converse"
            width={120}
            height={120}
            className="w-full h-full bg-white "
            unoptimized
          />
</div>

      {/* <div className='text-[1em] font-light text-black pl-5 md:w-[75%]' style={{ fontFamily: 'sans-serif' }}>
        The three things that make our hearts beat fast are Branding, Space Design, and Website Creation. Take a look-see at some of our favorites.
      </div> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[95%] md:w-full mt-5 pl-5">
        <div className="p-2 flex flex-col">
          {firstColumn.map((x) => (
            <div key={x} className='border-b-[1px] text-[0.9em] p-1 border-solid border-gray-500 flex flex-row items-center justify-between'>
              <div className='text-black'>{x}</div>
              <FaArrowRight className='text-black' />
            </div>
          ))}
          {secondColumn.map((x) => (
            <div key={x} className='md:hidden border-b-[1px] text-[0.9em] p-1 border-solid border-gray-500 flex flex-row items-center justify-between'>
              <div className='text-black'>{x}</div>
              <FaArrowRight className='text-black' />
            </div>
          ))}
          {thirdColumn.map((x) => (
            <div key={x} className='md:hidden border-b-[1px] text-[0.9em] p-1 border-solid border-gray-500 flex flex-row items-center justify-between'>
              <div className='text-black'>{x}</div>
              <FaArrowRight className='text-black' />
            </div>
          ))}
        </div>
      </div> */}

      <div className='mt-10 pl-5'>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
