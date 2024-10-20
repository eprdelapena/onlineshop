import React from 'react'
import bonescorporation from "@/public/images/bonescorporation.svg"
import Image from 'next/image'

const Footer = () => {
  return (
    <>
        <div className='w-full h-[8em]'>
            <Image
              alt={"bones text"}
              width={120}
              height={120}
              className="w-full h-full"
              src={bonescorporation}
            />
        </div>
    </>
  )
}

export default Footer