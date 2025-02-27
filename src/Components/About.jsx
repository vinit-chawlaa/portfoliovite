import React from 'react'
import a1 from "../assets/images/a1.avif";

const About = () => {
    return (
        <>
            <div id='about'>
                <div className='w-screen h-auto flex justify-center lg:flex-row flex-col-reverse items-center gap-20 py-20 bg-cyan-50'>

                   <div className='rounded-[50%] mx-w-[500px] h-[500px] flex-1 lg:pl-20 px-10'>
                        <img src={a1} alt="" className='w-fit h-fit rounded-[50%] cursor-pointer' />
                    </div>

                    <div className='flex-1 lg:pr-20 px-10 text-justify'>
                        <h3 className='font-sans text-center lg:text-left'>About</h3>
                        <h1 className='text-6xl font-bold font-sans py-7 text-center lg:text-left'>About Me</h1>
                        <p className='w-auto mx-auto font-sans text-xl'>I am a Front-End Developer skilled in React, JavaScript, HTML, CSS, Tailwind CSS, and Bootstrap. I specialize in building responsive, user-friendly websites with clean, efficient code. Using JavaScript, I create dynamic, interactive features, while React allows me to develop high-performance web applications. With Tailwind CSS, I design responsive, utility-first interfaces, and Bootstrap helps m e ensure mobile-first layouts.

                        </p>
                        <p className='py-7 w-auto font-sans text-xl'>
                            I am committed to delivering visually appealing and functional web experiences, always focused on user-centric design and performance.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About