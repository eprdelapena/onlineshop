import React from 'react'
import Image from 'next/image'
const Header_base = () => {
  return (
    <>

            <div className='flex items-center justify-center'>
            <div className='w-full  h-screen flex flex-col items-center justify-center'>

                <Image 
                alt={"bones ghost"}
                width={120}
                height={120}
                src={`https://static.vecteezy.com/system/resources/previews/030/465/577/large_2x/clothes-hang-in-a-modern-boutique-reflecting-contemporary-fashion-at-the-clothing-shop-vertical-mobile-wallpaper-ai-generated-free-photo.jpg`}
                className='w-full h-full'
                unoptimized
                />
            </div>
        </div>
    </>
  )
}

export default Header_base