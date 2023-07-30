"use client"

import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { MdOutlinePhone } from 'react-icons/md'
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5'
import { FaGithub, FaFacebook, FaLinkedin, } from 'react-icons/fa'
import nixon from '../assets/nixon.jpg'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import Image from 'next/image'


const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID as string
const publicKey =  process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY as string
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID as string

export default function Contact() {

  useEffect(() => {
    console.log( {
      templateId: templateId,
      publicKey: publicKey,
      serviceId: serviceId
    })
  },[])

  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const [userInput, setUserInput] = useState(
      {
          name: '',
          email: '',
          message: '',
      }
  );

  //handling user inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput({...userInput, [e.target.name]: e.target.value});
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if(userInput.name === '' && userInput.email === '' && userInput.message === ''){
        toast.custom((t) => (
            <div
              className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-md w-full bg-slate-900 border border-slate-700 text-[#FF0077] shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 transition-all font-semibold`}
            >
              <div className="flex-1 w-0 p-4">
                  <p>Please fill all the fields!</p> 
                </div>
                <div className="flex border-l border-slate-700">
                    <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-semibold text-[#FF0077] hover:text-[#FF0077]/80 focus:outline-none focus:ring-2 focus:ring-[#FF0077]"
                    >
                    Close
                    </button>
                </div>
            </div>
        ))
        console.log("Please fill all the fields!");
        return;
    }
    
    setLoading(true);

    emailjs.sendForm( serviceId, templateId, form.current!, publicKey)
    .then((result) => {
        setLoading(false);
        setUserInput(
            {
                name: '',
                email: '',
                message: '',
            }
        );
        toast.custom((t) => (
            <div
                className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-md w-full bg-slate-900 border border-slate-700 text-slate-200 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 transition-all`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                            <Image
                              src={nixon}
                              alt='nixonProfile'
                              width={0}
                              height={0}
                              className='h-11 w-11 rounded-full object-cover object-center'

                            />
                        </div>
                        <div className="ml-3 flex-1">
                            <p className="text-sm font-medium ">
                                Hello! Nixon Lim here.
                            </p>
                            <p className="mt-1 text-xs text-slate-300">
                                Thank you for having an interest. Please be assured that I will respond as soon as possible. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-slate-700">
                    <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-semibold text-[#FF0077] hover:text-[#FF0077]/80 focus:outline-none focus:ring-2 focus:ring-[#FF0077]"
                    >
                    Close
                    </button>
                </div>
            </div>
        ));
        
    }, (error) => {
        console.log(error.text);
        toast.custom((t) => (
            <div
              className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-md w-full bg-slate-900 border border-slate-700 text-[#FF0077] shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 transition-all font-semibold`}
            >
              <div className="flex-1 w-0 p-4">
                  <p>Something went wrong!</p> 
                </div>
                <div className="flex border-l border-slate-700">
                    <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-semibold text-[#FF0077] hover:text-[#FF0077]/80 focus:outline-none focus:ring-2 focus:ring-[#FF0077]"
                    >
                    Close
                    </button>
                </div>
            </div>
        ))
    });
};
  return (
    <div className='bg-slate-900 relative' id="contact">
      
        {/* Overlay top */}
        <div className='absolute z-10 -top-16 w-full h-36 bg-gradient-to-t from-slate-900 via-slate-900 to-transparent' />
        {/* Overlay top */}

        <div className='z-20 pt-20 pb-10 h-full w-full max-w-[1200px] m-auto px-6 text-center'>
            <p className='text-[#FF0077] text-lg font-semibold uppercase mb-3' data-aos="fade-up">Contact</p>
            <h1 className="text-white text-3xl md:text-4xl font-bold" data-aos="fade-down">Contact Me</h1>

            <div className='w-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6  mt-10'>

                    <div className='order-last mt-6 md:mt-0 md:border-r md:border-slate-800' data-aos="fade-left" data-aos-delay="500">  
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-max h-full m-auto'>
                            <div className='m-2 inline-block flex-1'>
                                <IoLocationOutline size="36" className='m-auto text-slate-100'/>
                                <h1 className='uppercase font-bold mt-3 text-[#FF0077] text-sm sm:text-md'>Where to find me</h1>
                                <p className='ml-3 text-slate-400 text-xs mt-2'>Malabon City, Philippines.</p>
                            </div>
                            <div className=' m-2 inline-block flex-1'>
                                <IoMailOutline size="36" className='m-auto text-slate-100'/>
                                <h1 className='uppercase font-bold mt-3 text-[#FF0077] text-sm sm:text-md'>My Gmail</h1>
                                <p className='ml-3 text-slate-400 text-xs mt-2 break-words'>limnixon03292001@gmail.com</p>
                            </div>
                            <div className=' m-2 inline-block flex-1'>
                                <MdOutlinePhone size="36" className='m-auto text-slate-100 stroke-0' />
                                <h1 className='uppercase font-bold mt-3 text-[#FF0077] text-sm sm:text-md'>Call me at</h1>
                                <p className='ml-3 text-slate-400 text-xs mt-2'>+639605587766</p>
                            </div>
                        </div>
                    </div>

                    <form ref={form} className='text-left block order-1 md:order-last'  data-aos="fade-right" data-aos-delay="500" onSubmit={sendEmail}>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="relative z-0 w-full mb-6  group ">
                                <input type="name" name="name" className="block py-2.5 px-0 w-full text-sm text-slate-300 bg-transparent border-0 border-b-2 border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-[#FF0077] peer" placeholder=" "  value={userInput.name} onChange={handleChange}/>
                                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF0077] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-slate-300 bg-transparent border-0 border-b-2  border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-[#FF0077] peer" placeholder=" "  value={userInput.email} onChange={handleChange}/>
                                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF0077] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <textarea rows={8} name="message" className="block py-2.5 px-0 w-full text-sm text-slate-300 bg-transparent border-0 border-b-2  border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-[#FF0077] peer" placeholder=" "
                            value={userInput.message} onChange={handleChange}></textarea>
                            <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF0077] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                        </div>

                        {loading ? 
                            <button type="submit" className='ml-auto bg-[#FF0077]/80 text-white/80 py-2 px-4 rounded-full mr-2 flex items-center justify-center flex-nowrap max-w-max font-medium text-sm sm:text-base' disabled>
                                <AiOutlineSend size="22" className="animate-spin"/> 
                                <span className='ml-1'>Sending...</span>
                            </button> 
                        :
                            <button type="submit" className='ml-auto bg-[#FF0077] text-white py-2 px-4 rounded-full mr-2 flex items-center justify-center flex-nowrap max-w-max font-medium text-sm sm:text-base'>
                                <AiOutlineSend size="22"/> 
                                <span className='ml-1'>Send Email</span>
                            </button>
                        }
                    </form>

                </div>
            </div>

            <div className='text-center mt-6 border-t border-slate-800 pt-10'>
                <p className='text-slate-400 text-sm'>Developed By: Nixon Lim</p>
                <div className='text-slate-200 flex flex-nowrap items-center justify-center mt-4'>
                    <a href="https://github.com/limnixon03292001" target="_blank" className='text-white rounded-full p-2 inline-block'>
                        <FaGithub size="27"/>
                    </a>
                    <a href="https://www.facebook.com/limnixon03292001" target="_blank" className='text-white rounded-full p-2  inline-block'>
                        <FaFacebook size="27"/>
                    </a>
                    <a href="https://www.linkedin.com/in/nixon-lim-7a433023b/" target="_blank" className='text-white rounded-full p-2  inline-block'>
                        <FaLinkedin size="27"/>
                    </a>
                </div>
            </div>
            
        </div>
    </div>
  )
}
