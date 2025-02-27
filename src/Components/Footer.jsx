import React from 'react'
import logo from "../assets/images/35.jpg";

const Footer = () => {
  return (
   <>
   <div className='w-full bg-cyan-50 py-10 px-5 overflow-x-hidden overflow-y-hidden mx-auto'>
      <div className='flex  flex-col lg:flex-row  items-center justify-between w-full max-w-6xl mx-auto'>
            <div className='flex items-center mr-16'>
            <img src={logo} alt="logo"  className='w-20 h-17 mix-blend-multiply object-contain' />
            <h4>VINIT CHAWLA</h4>
            </div>

               <ul className='flex flex-col lg:flex-row gap-5 mt-5 lg:mt-0 text-center lg:text-left'>
                <li>Services</li>
                <li>About me</li>
                <li>Portfolio</li>  
                <li>Testimonials</li>
              </ul>

              <a href="#contact">
              <button className='bg-violet-800 px-6 py-2 rounded-[5px] text-white cursor-pointer hover:bg-inherit hover:text-black transition-all hover:border-violet-600 hover:border-2  lg:right-15 mt-5 lg:mt-0'>Contact</button>
              </a>
              </div>
    
             
    

            <div className='flex justify-center'>
            <hr className='mt-20 w-[90%]'/>
            </div>

            <div className='flex flex-col lg:flex-row  items-center mt-5 w-full max-w-6xl mx-auto px-5'>
                <h3 className='lg:w-screen'>Made with 💖 by Vinit Chawla </h3>
                <div className='flex flex-col lg:flex-row gap-3 mt-3 lg:mt-0 lg:w-screen lg:justify-end'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies Settings</p>
                </div>
            </div>
   </div>
   </>
  )
}

export default Footer