import React from 'react'

const Skills = () => {
  return (
    <>
      <div className='w-screen h-auto bg-white py-30' id='services'>

        <p className=' font-semibold font-sans mx-25 text-center text-xl'>My Skills</p>
        <h1 className='font-bold font-sans mx-auto text-5xl py-5 text-center pb-15'>My Expertise</h1>

        <div className='px-10'>

          <div className='flex space-x-5 my-5 w-full flex-wrap space-y-5 justify-center'>

            <div className='bg-cyan-50 w-auto md:w-80 h-auto rounded-2xl hover:border-b-3 border-b-violet-600 cursor-pointer p-10'>
             <span className='text-5xl rounded-xl p-1 text-center block md:flex'>💻</span>
              <h2 className='text-2xl font-bold leading-10 font-sans px-1 py-5 w-auto md:text-left text-center'>Frontend Development</h2>
              <p className='text-xl leading-8 px-1'>Building fast, responsive, dynamic and interactive web interfaces with JavaScript, React, and Tailwind CSS.</p>
            </div>

            <div className='bg-cyan-50 w-auto md:w-80 h-auto rounded-2xl  hover:border-b-3 border-b-violet-600 cursor-pointer p-10'>
              <span className='text-5xl rounded-xl p-1 text-center block md:flex'>🛠️</span>
              <h2 className='text-2xl font-bold leading-10 font-sans px-1 py-5 w-auto md:text-left text-center'>Backend Development</h2>
              <p className='text-xl leading-8 px-1'>Developing scalable and secure server-side applications using Node.js, Express, and MongoDB.</p>
            </div>

            <div className='bg-cyan-50 w-auto md:w-80 h-auto rounded-2xl  hover:border-b-3 border-b-violet-600 cursor-pointer p-10'>
              <span className='text-5xl  rounded-xl p-1 text-center block md:flex'>🎨</span>
              <h2 className='text-2xl font-bold leading-10 font-sans px-1 py-5 w-auto md:text-left text-center'>UI/UX Design</h2>
              <p className='text-xl leading-8 px-1'>Creating intuitive and engaging user experiences with responsive designs, wireframing, and interactive prototypes.</p>
            </div>

            <div className='bg-cyan-50 w-auto md:w-80 h-auto rounded-2xl hover:border-b-3 border-b-violet-600 cursor-pointer p-10'>
              <span className='text-5xl  rounded-xl p-1 text-center block md:flex'>⚡</span>
              <h2 className='text-2xl font-bold leading-10 font-sans px-1 py-5 w-auto md:text-left text-center'>Performance Optimization</h2>
              <p className='text-xl leading-8 px-1'>Enhancing website speed and efficiency through code splitting, lazy loading, caching, and optimized rendering techniques.</p>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Skills