import React, { useEffect, useState } from 'react'
import logo from "../assets/images/35.jpg";

const Navbar = () => {

    const [isopen,setIsopen] = useState(false)
    const [item,setItem] = useState('home')

   

  return (
    <div>
        <nav className='w-screen bg- h-18 flex items-center fixed top-0 left-0 z-50 bg-white border-b-1 border-gray-500'>
          <div className='left-5 flex items-center'>
            <img src={logo} alt="logo"  className='w-20 h-17'/> 
           <h4>VINIT CHAWLA</h4>
          </div>
          

          <ul className='absolute justify-center w-screen gap-10 hidden md:flex z-1'>
          <li className={`hover:text-violet-800 ${item === 'home' ? 'text-violet-800' : ''} `} onClick={() => setItem('home')} ><a href="#">Home</a></li>
          <li className={`hover:text-violet-800 ${item === 'services' ? 'text-violet-800' : ''}`} onClick={() => setItem('services')}><a href="#services">Services</a></li>
          <li className={`hover:text-violet-800 ${item === 'about' ? 'text-violet-800' : ''}`} onClick={() => setItem('about')}><a href="#about">About</a></li>
          <li className={`hover:text-violet-800 ${item === 'portfolio' ? 'text-violet-800' : ''}`} onClick={() => setItem('portfolio')}><a href="#portfolio">Portfolio</a></li>
          </ul>

        
         <div className='justify-end right-5 absolute hidden md:flex z-2'>
         <a href="#contact">
         <button className='bg-violet-800 px-5 py-2 rounded-[5px] text-white cursor-pointer hover:bg-inherit hover:text-black transition-all hover:border-violet-600 hover:border-2'>Contact</button></a> </div>
      
         
          
         
         
            <button onClick={() => setIsopen(!isopen)} className='md:hidden text-2xl absolute right-10 cursor-pointer'>
             ☰
            </button>

            <div className={`${isopen ? 'block' : 'hidden'} md:hidden flex absolute top-18  w-screen bg-violet-400 justify-center`}>
            <ul className='absolute  gap-10 md:flex h-35 z-5'>
            <a href="#">
            <li className={`bg-blue-300  w-screen text-center cursor-pointer py-3 ${item === 'home' ? 'bg-blue-600 text-white' : ''}`}onClick={() => setItem('home')}>Home</li>
            </a>
            <a href="#services">
            <li className={`bg-blue-300  w-screen text-center cursor-pointer py-3 ${item === 'services' ? 'bg-blue-600 text-white' : ''}`}onClick={() => setItem('services')}>Services</li>
            </a>
            <a href="#about">
            <li className={`bg-blue-300  w-screen text-center cursor-pointer py-3 ${item === 'about' ? 'bg-blue-600 text-white' : ''}`}onClick={() => setItem('about')}>About</li>
            </a>
            <a href="#portfolio">
            <li className={`bg-blue-300  w-screen text-center cursor-pointer py-3 ${item === 'portfolio' ? 'bg-blue-600 text-white' : ''}`}onClick={() => setItem('portfolio')}>Portfolio</li>
            </a>
          
            <a href="#contact">
            <button className={`bg-blue-300  w-screen text-center cursor-pointer py-3 ${item === 'contact' ? 'bg-blue-600 text-white': ''}`} onClick={() => setItem('contact')}>Contact</button>
            </a>
             </ul> 
            </div>
          
        </nav>
    </div>
  )
}

export default Navbar