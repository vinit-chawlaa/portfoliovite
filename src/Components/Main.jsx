import React from 'react'
import a1 from "../assets/images/a1.avif";

const Main = () => {
  return (  
    <>
    <div className='w-screen bg-cyan-50 h-auto flex py-20 p-7 flex-col lg:flex-row gap-10 mt-18'>
      <div className='lg:flex-1 lg:text-left font-semibold text-center'>
       <h4 className='font-sans px-1'>Hey , I am Vinit</h4>
       <h1 className='text-4xl  font-sans md:leading-17 font-bold py-2 md:text-5xl leading-15'>Transforming Ideas into Custom <span className='text-violet-800'>Web Designs</span> That Drive Engagement</h1>
       <p className='font-normal text-[18px] font-sans py-2 pb-5 md:text-[21px]'>I design engaging, user-friendly websites and applications that deliver seamless experiences and reflect your brand’s vision.</p>
       <button className='bg-violet-800 px-8 py-4 rounded-[5px] text-white cursor-pointer hover:bg-inherit hover:text-black transition-all hover:border-violet-600 hover:border-2 text-1xl'>Download CV</button>
      </div>

      <div className='flex-1 lg:justify-end flex justify-center mx-w-[500px] h-[500px]'>
       <img src={a1} alt="Hero" className='w-fit h-fit rounded-[50%] cursor-pointer'/>
      </div>
    </div>  
    </>
  )
}

export default Main