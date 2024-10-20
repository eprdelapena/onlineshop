import React from 'react'
import Footer from '../components/common/footer/footer'
const page = () => {

  return (

    <div className='flex flex-col'>
        <div className=' text-[1.8em] font-light w-full text-black pl-5 py-8' style={{ fontFamily: 'sans-serif' }}>
            About
        </div>    
        <div className=' mb-4 text-[1em] font-light text-black pl-5 md:w-[75%]' style={{ fontFamily: 'sans-serif' }}>
            {`If you want to change a system, you have to have a solution from outside the system. That's who we are. We are the outsiders.`}
        </div>  
        <div className=' text-[1em] font-light text-black pl-5 md:w-[75%]' style={{ fontFamily: 'sans-serif' }}>
            {`We want to hear your story and how it evolves around your purpose and beliefs. Together. We will find ways to create engagement and earn trust while always sticking to your truth.`}
        </div>  
        <div className='mt-[10em] pl-5'>
            <Footer/>
        </div>
    </div>
    

  )
}

export default page