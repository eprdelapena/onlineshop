import React from 'react'
import Image from 'next/image'
import bonestext from "@/public/images/bonestext.svg"
import bonesghost from "@/public/images/bonesghost.webp"
const Header_base = () => {
  return (
    <>
        <div className='w-full h-[28em] flex flex-col items-center justify-center'>
            <Image 
                alt={"bones text"}
                width={120}
                height={120}
                src={bonestext}
                className='w-full h-full'
            />
            </div>
            <div className='flex items-center justify-center'>
            <div className='w-fit h-[15em] flex flex-col items-center justify-center'>
                <Image 
                alt={"bones ghost"}
                width={120}
                height={120}
                src={bonesghost}
                className='w-full h-full'
                />
            </div>
        </div>
    </>
  )
}

export default Header_base