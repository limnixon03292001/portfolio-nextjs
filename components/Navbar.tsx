"use client"

import { Link } from 'react-scroll'
import { useState } from 'react'
import SideNav from './SideNav'

export default function Navbar() {
  const  [isOpen, setIsOpen] = useState<Boolean>(false)

  return (
    <div className='w-full h-full'>
      <nav className='h-20 w-full z-50 fixed top-0 bg-transparent backdrop-blur'>
        <div className='max-w-[1200px] w-full h-full m-auto flex items-center justify-between text-white px-6'>
            <div>
                <p className='font-bold text-3xl'>N<span className='text-[#FF0077]'>L</span></p>  
            </div>
            <div className='relative'>
              <div className='hidden sm:flex flex-nowrap w-full uppercase'>

                <div className='relative navSpy' data-aos="fade-down" data-aos-delay="150">
                  <Link to="aboutMe" spy={true} smooth={true} offset={-140} duration={200} className='relative inline-block mx-3 py-2 cursor-pointer'>About</Link>
                </div>

                <div className='navSpy'data-aos="fade-down" data-aos-delay="250">
                  <Link to="skills" spy={true} smooth={true} offset={-100} duration={200} 
                  className='relative inline-block mx-3 py-2 cursor-pointer'>Skills</Link>
                </div>

                <div className='navSpy' data-aos="fade-down" data-aos-delay="350">
                  <Link to="projects" spy={true} smooth={true} offset={-100} duration={200} className='relative inline-block mx-3 py-2  cursor-pointer'>Projects</Link>
                </div>

                <div className='navSpy' data-aos="fade-down" data-aos-delay="450">
                  <Link to="contact" spy={true} smooth={true} offset={-90} duration={200} className='relative inline-block mx-3 py-2  cursor-pointer'>Contact</Link>
                </div>

              </div>
          
              <button className='block sm:hidden' onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          
        </div>
      </nav>
      <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}
