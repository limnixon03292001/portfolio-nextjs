import { Link } from 'react-scroll'
import { Dispatch, SetStateAction } from "react";

export default function SideNav({ isOpen, setIsOpen } : { isOpen: Boolean, setIsOpen: Dispatch<SetStateAction<Boolean>>}) {
  return (
    <nav className={`border-l border-slate-800/50 w-full max-w-[full fixed top-0 bottom-0 left-0 h-screen bg-slate-900/60
    backdrop-blur z-50 text-slate-200 overflow-y-hidden ${isOpen ? `translate-y-0` : `translate-y-full`} sm:-translate-y-full transition-transform`}>
        <div className='relative w-full h-full'>
            <button className='mt-7 mr-6 absolute top-0 right-0' onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
            <div className='flex flex-col flex-nowrap items-center justify-center w-full h-full uppercase text-center font-medium space-y-3' >
            <div className='relative navSpy'>
                  <Link to="aboutMe" spy={true} smooth={true} offset={-140} duration={200} className='relative inline-block mx-3 py-2 cursor-pointer' onClick={() => setIsOpen(!open)}>About</Link>
                </div>

                <div className='navSpy'>
                  <Link to="skills" spy={true} smooth={true} offset={-100} duration={200} 
                  className='relative inline-block mx-3 py-2 cursor-pointer' onClick={() => setIsOpen(!open)}>Skills</Link>
                </div>

                <div className='navSpy'>
                  <Link to="projects" spy={true} smooth={true} offset={-100} duration={200} className='relative inline-block mx-3 py-2  cursor-pointer' onClick={() => setIsOpen(!open)}>Projects</Link>
                </div>

                <div className='navSpy'>
                  <Link to="contact" spy={true} smooth={true} offset={-90} duration={200} className='relative inline-block mx-3 py-2  cursor-pointer' onClick={() => setIsOpen(!open)}>Contact</Link>
                </div>

            </div>
        </div>
    </nav>
  )
}
