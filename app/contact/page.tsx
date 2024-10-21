"use client";

import React, { useState } from 'react';
import { FaInstagram, FaTwitter } from "react-icons/fa";
import Swal from 'sweetalert2';

const Page = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Show success alert
    Swal.fire({
      title: 'Success!',
      text: 'Comment published',
      icon: 'success',
    }).then(() => {
      // Clear the comment input after the alert is closed
      setComment('');
    });
  };

  return (
    <>
    <div className='flex flex-col md:flex-row w-full'>
    <div className='flex flex-col w-[100%] md:w-[50%]'>
      <div className='text-[1.8em] font-light w-full text-black pl-5 py-8' style={{ fontFamily: 'sans-serif' }}>
        Contact us
      </div>
      <div className='mb-4 text-[1em] font-light text-black pl-5 md:w-[75%]' style={{ fontFamily: 'sans-serif' }}>
        {`Do you want to build an amusement park? Ok - we can help with that, for real - we just found out where you can buy legit roller coasters. You want to start a company that hosts staring eye contests - let’s do it. Nothing too big, too weird, too small, too scary. We got you.`}
      </div>
      <div className='text-[1em] font-light text-black pl-5 md:w-[75%]' style={{ fontFamily: 'sans-serif' }}>
        {`Follow us if you're into that type of thing.`}
      </div>
      <div className='flex flex-row gap-x-3 mt-5 pl-5'>
        <FaInstagram className='text-black text-[2em] hover:text-red-500 transition cursor-pointer' />
        <FaTwitter className='text-black text-[2em] hover:text-red-500 transition cursor-pointer' />
      </div>

      {/* Comment Section */}
      <div className='mt-5 pl-5 pr-5 md:w-[100%]'>
        <h3 className='text-black text-[1.2em] mb-2'>Leave a Comment</h3>
        <form onSubmit={handleCommentSubmit} className='flex flex-col'>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            rows={4}
            placeholder="Write your comment here..."
            className='border text-black border-gray-300 rounded-md p-2 mb-2'
            required
          />
          <button type="submit" className='bg-black text-white rounded-md p-2 hover:bg-gray-800 transition'>
            Submit Comment
          </button>
        </form>
      </div>
    </div>

    <div className='flex flex-col w-full md:w-1/2 h-screen overflow-y-auto '>

      <div className="flex items-center p-4 border-b">
        {/* <img
          src={comment.userImage}
          alt={comment.userName}
          className="w-12 h-12 rounded-full mr-4"
        /> */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">asdfasdf</h3>
          <p className="text-sm text-gray-500">asdfasdf</p>
        </div>
      </div>

      


    </div>
    </div>


    
    </>

  );
};

export default Page;
