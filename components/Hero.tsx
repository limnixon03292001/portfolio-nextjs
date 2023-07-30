import React from 'react'
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

const name = "I'm Nixon Lim"

export default function Hero() {
  return (
    <div className=' h-full w-full pt-24'>
        <div className='min-h-[520px] w-full h-full flex flex-col items-start sm:items-center justify-center px-6 text-left sm:text-center relative z-30'>
            <p className='text-[#FF0077] text-2xl font-semibold' data-aos="fade-up" data-aos-delay="550">Hello!</p>
            <h1 className="text-white text-[44px] sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight"  data-aos="fade-up"
            data-aos-delay="650">{name}</h1>
            <p className='text-slate-100 mt-3 text-base font-bold md:text-xl' data-aos="fade-up" data-aos-delay="750">React JS Developer</p>

            <div data-aos="fade-up" data-aos-delay="850">
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-6
                 sm:text-md lg:text-lg w-full max-w-[430px] font-semibold md:text-lg self-center animate-text'>
                    Passionate about creating visually appealing and user-friendly websites with React JS
                </p>
            </div>
           
            <div className='mt-6'>
                <a href="https://github.com/limnixon03292001" target="_blank" className='text-white rounded-full p-2 inline-block'
                data-aos="fade-up" data-aos-delay="950">
                    <FaGithub size="29"/>
                </a>
                <a href="https://www.facebook.com/limnixon03292001" target="_blank" className='text-white rounded-full p-2  inline-block'
                data-aos="fade-up" data-aos-delay="1050">
                    <FaFacebook size="29"/>
                </a>
                <a href="https://www.linkedin.com/in/nixon-lim-7a433023b/" target="_blank" className='text-white rounded-full p-2 inline-block'
                data-aos="fade-up" data-aos-delay="1150">
                    <FaLinkedin size="29"/>
                </a>
            </div>

            {/* <button className="text-base backdrop-blur bg-[#FF0077]/20 text-[#FF0077] px-3 py-2 rounded-md font-bold
            mt-4 "><span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>My Resume</span>
            </button> */}


            <div className='mt-6' data-aos="fade-up" data-aos-delay="1250">
                <svg xmlns="http://www.w3.org/2000/svg" className="m-auto animate-bounce h-10 w-10 text-[#FF0077]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
            </div>
            
            {/* <lottie-player
                data-aos="fade-left"
                autoplay
                loop
                mode="normal"
                background="transparent"
                src="https://assets1.lottiefiles.com/packages/lf20_bqmgf5tx.json"
                class="astro1Hero"
            /> */}
        </div>
    </div>
  )
}
