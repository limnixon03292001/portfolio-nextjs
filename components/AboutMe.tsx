import Image from 'next/image'
import nixon from '../assets/nixon.jpg'

const introduction = `Hello, I'm Nixon Lim, an aspiring Front-end web developer with a passion for designing visually-appealing and user-friendly websites. The pandemic presented an opportunity for me to immerse myself in web development and enhance my skills. I taught myself HTML and CSS, and was captivated by the creative potential it held. I then advanced to technologies such as JavaScript and React, dedicating much time to mastering them. The pandemic gave me the chance to focus on my web development journey.
Creating something from scratch and bringing it to life on the web is truly satisfying, especially when users can interact with it smoothly. I am eager to improve my skills and make a meaningful impact in the web development community, and continuously learn, experiment and grow as a Front-end developer.`

export default function AboutMe() {
  return (
    <div className='mt-20 text-left sm:text-center relative' id="aboutMe">
      <div className='pb-20 h-full w-full max-w-[1200px] m-auto px-6 z-30' data-aos="fade-up">
          <p className='text-[#FF0077] text-lg font-semibold uppercase mb-3'>About me</p>
          <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight ">Let me introduce myself</h1>
          {/* <b className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'> */}
          <p className='text-slate-400 mt-6 text-sm lg:text-base font-medium w-full max-w-[800px] m-auto leading-relaxed sm:text-justify'>
              <span>
                  Hello, my name is Nixon and I am an aspiring front-end developer with a <b className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>passion for creating visually-appealing and user-friendly 
                  websites</b>. My interest in popular social media platforms like Facebook and Twitter inspired me to learn web development. 
                  I am endlessly fascinated by the mechanics behind these platforms, and it is my ultimate goal to create my own social media platform one day.
              </span>
              <br/>
              <br/>
              <span className='mt-4'>
                  As I honed my skills in web development, I became increasingly driven to explore and experiment, leading to the creation of my first social media platform. 
                  My desire to create visually stunning websites and my <b className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>willingness to constantly push beyond my limits</b>, 
                  fuels my dedication to staying up to date with the latest technologies and trends. <b className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                  My ultimate goal is to make a meaningful contribution to the tech industry and leave a lasting impact.</b>  
              </span>

          </p>
          <div className='mt-6 flex gap-3 items-center max-w-fit sm:mt-6 sm:m-auto'>
              <div className=''>
                  <Image
                    src={nixon}
                    alt='nixon poster'
                    width={52}
                    height={52}
                    className='w-[52px] h-[52px] md:w-[64px] md:h-[64px] m-auto rounded-full object-cover'
                  />
              </div>

              <div className='text-left'>
                  <h2 className='text-white font-semibold text-base md:text-lg'>Nixon Lim</h2>
                  <p className='text-slate-400 text-xs md:text-sm'>Front-End/React JS Developer</p>
              </div>
          </div>
      </div>
      <div className="bg-slate-900 h-[4rem] w-full absolute left-0 right-0 bottom-0 z-30 rotate-100" style={{clipPath: 'polygon(0 10%, 0% 100%, 100% 100%)'}}/>
    </div>
  )
}
