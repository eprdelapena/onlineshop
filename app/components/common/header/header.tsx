"use client";

import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { IHeader } from '@/app/models/interface';
import { usePathname } from 'next/navigation';
import Header_base from '../../routes/base/header_base';
import Link from 'next/link';
import ImageCarousel from './carousel/carousel';
import Image from 'next/image';
import logo from "@/public/images/logomica2.png";

const links = [
  { stringData: 'Studio', path: 'studio' },
  { stringData: 'About', path: 'about' },
  { stringData: 'Contact', path: 'contact' },
];

const Header: React.FC<IHeader> = ({ children }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className='w-full bg-white min-h-screen'>
      <div className='w-full flex flex-row px-5 bg-pink-50 items-center md:gap-x-0 justify-center md:justify-between'>
        <div className='h-[5em] text-pink-500 flex text-lg items-center justify-center w-[8em]'>
          <div className='w-[3em] h-[3em]'>
            <Image src={logo} width={120} height={120} className="w-full h-full" alt="Shopkeen Logo"/>
          </div>
          <a href="/"> Shopkeen</a>
        </div>
        <div className='flex items-center lg:pr-0'>
          <div className="flex items-center bg-white border border-gray-500 rounded-lg">
            <input
              type="text"
              className="pl-2 pr-1 w-[10em] md:w-[20em] bg-white text-black border-none focus:outline-none"
              placeholder="Search..."
            />
            <button className="p-2 bg-black text-white rounded-r">
              <FaSearch />
            </button>
          </div>
          <button onClick={toggleMenu} className="lg:hidden">
            {isMenuOpen ? <FaTimes className='text-black' /> : <FaBars className='text-black ml-5' />}
          </button>
        </div>
        <div className="hidden lg:flex items-center gap-x-5">
          {links.map((item, index) => (
            <div key={index} className="text-center group relative">
              <Link
                target='_self'
                href={item.path}
                className="text-black group-hover:text-black/70 cursor-pointer transition duration-300 text-[1.1em] font-light"
                style={{ fontFamily: 'sans-serif' }}
              >
                {item.stringData}
              </Link>
              <div className="w-1 h-1 bg-black/0 group-hover:bg-black/100 transition duration-300 absolute rounded-full top-[125%] mx-auto left-[50%] transform -translate-x-1/2"></div>
            </div>
          ))}
          {/* <Link target='_self' href="/login" className="text-black group-hover:text-black/70 cursor-pointer transition duration-300 text-[1.1em] font-light" style={{ fontFamily: 'sans-serif' }}>
            Login
          </Link>
          <Link target='_self' href="/signup" className="text-black group-hover:text-black/70 cursor-pointer transition duration-300 text-[1.1em] font-light" style={{ fontFamily: 'sans-serif' }}>
            Sign-up
          </Link> */}
        </div>
      </div>

      <div className='flex flex-row'>
        <div className={`w-full bg-pink-50 h-screen ${pathname === "/contact" ? "lg:w-[100%]" : "lg:w-[50%]"}`}>
          {children}
        </div>

        <div className={`hidden lg:flex items-start justify-center bg-pink-50 ${pathname === "/contact" ? "hidden" : "w-[50%]"}`}>
          {pathname === "/" && <div className='w-full flex flex-col'><Header_base /></div>}
          {pathname === "/studio" && <div className='w-[90%] flex flex-col'><ImageCarousel /></div>}
          {pathname === "/about" && <div className='w-full flex flex-col'><Header_base /></div>}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white p-4 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end">
          <button className="ml-10 md:ml-0" onClick={toggleMenu}>
            <FaTimes className='text-black' />
          </button>
        </div>
        {links.map((item, index) => (
          <div key={index} className="py-2 text-center">
            <Link
              target='_self'
              href={item.path}
              className="text-black block cursor-pointer transition duration-300"
              onClick={toggleMenu}
            >
              {item.stringData}
            </Link>
          </div>
        ))}
        {/* <div className="py-2 text-center">
          <Link target='_self' href="/login" className="text-black block cursor-pointer transition duration-300" onClick={toggleMenu}>
            Login
          </Link>
        </div> */}
        {/* <div className="py-2 text-center">
          <Link target='_self' href="/signup" className="text-black block cursor-pointer transition duration-300" onClick={toggleMenu}>
            Sign-up
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
