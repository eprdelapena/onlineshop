"use client";

import React, { useState } from 'react';
import bonesicon from "@/public/images/bonesicon.svg";
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { IHeader } from '@/app/models/interface';
import { usePathname } from 'next/navigation';
import Header_base from '../../routes/base/header_base';
import Link from 'next/link';
import ImageCarousel from './carousel/carousel';

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
      <div className='flex flex-row'>
        <div className='w-[100%] lg:w-[50%] flex flex-col'>
          <div className='w-full flex flex-row p-2 pt-4 items-center justify-between'>
            <div className='lg:pr-0 pl-5'>
              <a href="/">
                <Image 
                  alt={"bones icon"}
                  width={20}
                  height={20}
                  src={bonesicon}
                />
              </a>
            </div>
            <div className='flex items-center gap-x-5 lg:pr-0 pr-5'>
              <div className="flex items-center border border-gray-500 rounded-lg">
                <input
                  type="text"
                  className="pl-1 text-black border-none focus:outline-none"
                  placeholder="Search..."
                />
                <button className="p-2 bg-black text-white rounded-r">
                  <FaSearch />
                </button>
              </div>
              <div className="hidden lg:flex items-center gap-x-5">
                {links.map((item, index) => (
                  <div key={index} className="text-center group relative">
                    <Link
                      target='_self'
                      href={item.path}
                      className="text-black group-hover:text-black/40 cursor-pointer transition duration-300 text-[1.1em] font-light"
                      style={{ fontFamily: 'sans-serif' }}
                    >
                      {item.stringData}
                    </Link>
                    <div className="w-1 h-1 bg-black/0 group-hover:bg-black/100 transition duration-300 absolute rounded-full top-[125%] mx-auto left-[50%]"></div>
                  </div>
                ))}
              </div>
              <div className="hidden lg:flex gap-x-5">
                <Link target='_self' href={""} className="text-black group-hover:text-black/40 cursor-pointer transition duration-300 text-[1.1em] font-light" style={{ fontFamily: 'sans-serif' }}>
                  Login
                </Link>
                <Link target='_self' href={""} className="text-black group-hover:text-black/40 cursor-pointer transition duration-300 text-[1.1em] font-light" style={{ fontFamily: 'sans-serif' }}>
                  Sign-up
                </Link>
              </div>
              <button onClick={toggleMenu} className="lg:hidden p-2">
                {isMenuOpen ? <FaTimes className='text-black' /> : <FaBars className='text-black'/>}
              </button>
            </div>
          </div>
          {children}
        </div>

        <div className='hidden lg:flex items-center justify-center w-[50%]'>
          <div className={`${pathname === "/studio" ? "w-[80%]" : "w-[60%]" } flex flex-col`}>

            {pathname === "/studio" ? <ImageCarousel/> : <Header_base />}
         
            
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white p-4 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end">
          <button onClick={toggleMenu}>
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
        <div className="py-2 text-center">
          <Link target='_self' href={""} className="text-black block cursor-pointer transition duration-300" onClick={toggleMenu}>
            Login
          </Link>
        </div>
        <div className="py-2 text-center">
          <Link target='_self' href={""} className="text-black block cursor-pointer transition duration-300" onClick={toggleMenu}>
            Sign-up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
