import React from 'react'
import Footer from './components/common/footer/footer'


const page = () => {
  return (
    <>
      <div className='w-[75%] flex flex-row p-2 pt-4 items-center justify-between'>
        <div className='lg:pr-0 pl-5 mb-[2em]' >
          <p className='text-black' style={{ fontFamily: 'sans-serif' }}>
          {`Bones Co. is a husband & wife IRL and on the world wide web creative studio. Its what happened when a couple of OGs got together and made it their business to help humans make better design decisions.`}
          </p>
        </div>
      </div>
      <div className='lg:pr-0 pl-5 mb-5 flex h-[100%] gap-y-[13em] items-between flex-col'>
          <div className='w-[16em] items-center flex h-[2.3em] text-white bg-black rounded-full relative'>
              <div className='w-[0.5em] ml-2 mr-2 animate-pulse h-[0.5em] rounded-full bg-green-500'>
                
              </div>
              <p className='text-white'>Currently Available</p>
            <div className='flex items-center justify-center border-white border-[1px] cursor-pointer border-solid w-[5em] group hover:bg-black transition h-[1.8em] bg-white left-[67%] top-[10%] bg-green-500 rounded-full absolute'>
              <p className="text-black text-[0.9em] group-hover:text-white" style={{ fontFamily: 'sans-serif' }}>Book now</p>
            </div>
          </div>
          <Footer/>
      </div>
    </>

  )
}

export default page