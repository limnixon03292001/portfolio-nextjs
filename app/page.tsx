"use client"

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import hero from '../assets/bgHero4.png'


export default function Home() {

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 200,
    });
  },[])

  return (
    <div className='font-fontMain antialiased overflow-hidden'>

      <p style={{ color: '#000000', fontWeight: 'bold'}}>will be right back!.</p>
      {/* <div className="h-full relative bg-gray-50">
        <Navbar/>

        <div className="relative w-full h-full">
          <div className="bg-cover bg-no-repeat bg-[#0B1120] h-full w-full" style={{
            backgroundImage: 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.25) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.25) 100%)'
          }}>
             <div className="x absolute z-10 inset-0 [mask-image:linear-gradient(360deg,white,rgba(255,255,255,0))] bg-top" 
             style={{
              backgroundImage: `url(${hero.src})`,
              width: '100%',
              height: '100%'
             }} />
           
              <Hero/>
              <AboutMe/>
          </div>
        </div>

        <div className="z-10" >
          <Skills/>
        </div>

        <div className='relative w-full h-full'>
          <Projects/>
        </div>

        <div>
          <Contact/>
        </div>

      </div> */}

      {/* Toast */}
      {/* <Toaster
        position="bottom-center"
        reverseOrder={false}
      /> */}
      {/* Toast End */}
    </div>
  )
}
