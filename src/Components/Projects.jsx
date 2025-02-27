import React from 'react'
import weather from "../assets/images/38.jpg";
import todo from "../assets/images/37.png";
import ecommerce from "../assets/images/36.webp";


const Projects = () => {
  return (
    <>
    <div className='w-screen h-auto py-20 px-5' id='portfolio'>

    <button className='bg-cyan-500 w-50  text-white cursor-pointer py-3 md:right-20 absolute md:mt-15 hover:bg-inherit hover:border-2 hover:border-cyan-500 transition-all hover:text-black my-36'>Visit My Github</button>
    <h2 className='font-semibold leading-15 lg:mx-15'>Recent Projects</h2>
    <h1 className='font-bold text-5xl w-100 5 lg:mx-15'>My Portfolio</h1>

    <div className='md:mt-30 mt-40'>
     <div className='flex lg:gap-10 flex-wrap justify-center gap-20'>

     <div className='lg:w-108 lg:h-135 bg-white rounded-[7px] cursor-pointer shadow-2xl pb-8'>
        <img src={weather} alt="weather img" className='rounded-[7px] lg:h-70 w-full h-auto object-cover'/>
        <h3 className='font-bold pt-10 px-7 text-3xl pb-5'>Weather App</h3>
        <p className='text-justify px-7 text-[17px] pb-2'>This Weather App, built with React.js and Weather API, provides real-time weather updates. Users can check temperature, humidity, wind speed, and weather conditions for any city. 🌍🌤️ </p>
        <a href="" className='font-semibold px-7 pb-5 underline'>View On Github<span className='text-2xl'>↗</span></a>
     </div>
     
    
     <div className='lg:w-108 lg:h-135 bg-white rounded-[7px] cursor-pointer shadow-2xl  pb-8'>
        <img src={ecommerce} alt="ecommerce img" className='rounded-[7px] lg:h-70 w-full h-auto'/>
        <h3 className='font-bold pt-10 px-7 text-3xl pb-5'>Ecommerce Product Page</h3>
        <p className='text-justify px-7 text-[17px] pb-2'>This ecommerce product page, built with React.js and styled with Tailwind CSS, dynamically fetches real-time data via API for an interactive and responsive shopping experience. 🌐🛒 </p>
        <a href="" className='font-semibold px-7 pb-5 underline'>View On Github<span className='text-2xl'>↗</span></a>
     </div>
     

     
     <div className='lg:w-108 lg:h-135 bg-white rounded-[7px] cursor-pointer shadow-2xl pb-8'>
        <img src={todo} alt="Todo img" className='rounded-[7px] lg:h-70 w-full h-auto  object-cover'/>
        <h3 className='font-bold pt-10 px-7 text-3xl pb-5'>Todo App</h3>
        <p className='text-justify px-7 text-[17px] pb-2'>This To-Do App, built with React.js, allows users to manage tasks with full CRUD functionality—create, read, update, and delete tasks with a smooth, interactive interface. 📝✅ </p>
        <a href="" className='font-semibold px-7 pb-5 underline'>View On Github<span className='text-2xl'>↗</span></a>
     </div>

     </div>
    </div>
    </div>
    </>
  )
}

export default Projects