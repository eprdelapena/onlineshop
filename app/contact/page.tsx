"use client";

import React, { useEffect, useState } from 'react';
import { FaInstagram, FaTwitter } from "react-icons/fa";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [currentComment, setComment] = useState<string>('');
  const [currentUsername, setUsername] = useState<string>('');
  const [data, setData] = useState<{ username: string, comment: string }[]>([]);

  const router = useRouter();

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const postData = async (): Promise<void> => {
    try {
      const response = await fetch("https://backendmika.onrender.com/postcomment", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer/abcdef'
        },
        body: JSON.stringify({
          username: currentUsername,
          comment: currentComment
        })
      });
      if (!response.ok) {
        throw new Error("Failed to post comment");
      }
      setComment(''); // Clear the comment input after posting
      setUsername(''); // Clear the username input after posting
      await fetchData(); // Refresh comments after posting
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch("https://backendmika.onrender.com/comments", {
        method: "GET",
        headers: {
          'Authorization': "bearer/abcdef",
          'Content-Type': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error("Fetching failed");
      }
      const comments = await response.json();
      setData(comments);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await postData();
    Swal.fire({
      title: 'Success!',
      text: 'Your comment has been submitted.',
      icon: 'success',
    }).then(() => {
      router.push("/studio");
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
            Do you want to build an amusement park? Ok - we can help with that, for real - we just found out where you can buy legit roller coasters. You want to start a company that hosts staring eye contests - let’s do it. Nothing too big, too weird, too small, too scary. We got you.
          </div>
          <div className='text-[1em] font-light text-black pl-5 md:w-[75%]' style={{ fontFamily: 'sans-serif' }}>
            Follow us if you are into that type of thing.
          </div>
          <div className='flex flex-row gap-x-3 mt-5 pl-5'>
            <FaInstagram className='text-black text-[2em] hover:text-red-500 transition cursor-pointer' />
            <FaTwitter className='text-black text-[2em] hover:text-red-500 transition cursor-pointer' />
          </div>

          {/* Comment Section */}
          <div className='mt-5 pl-5 pr-5 md:w-[100%]'>
            <h3 className='text-black text-[1.2em] mb-2'>Leave a Comment</h3>
            <form onSubmit={handleCommentSubmit} className='flex flex-col'>
              <input 
                type="text" 
                className='border text-black border-gray-300 rounded-md p-2 mb-2' 
                onChange={handleUsernameChange} 
                placeholder="Write your username..." 
                required 
              />
              <textarea
                value={currentComment}
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

        <div className='flex flex-col w-full md:w-1/2 h-screen overflow-y-auto'>
          {data && data.slice(-8).reverse().map((comment, index) => (
            <div key={index} className="flex items-center p-4 border-b">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{comment.username}</h3>
                <p className="text-sm text-gray-500">{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
