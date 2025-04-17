import React from 'react'
import { BsEnvelopePaper } from 'react-icons/bs';

const Newsletter = () => {
  return (
    <div className='bg-black pt-16 pb-16 flex items-center justify-center w-full flex-col'>
        <BsEnvelopePaper className='w-16 h-16 text-white mt-20' />
        <h1 className='text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest'>Your Journey Starts Here</h1>
        <p className='mt-3 text-white text-xs sm:text-sm'>Sign up and we&apos;ll send the best deals to you</p>
        <form className='mt-5 flex flex-col sm:flex-row items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
            <input type="email" placeholder='Enter your email' className='w-full p-3 rounded-md text-black bg-white' />
            <button className='bg-white hover:bg-blue-950 text-black p-3 rounded-md mt-3 sm:mt-0 sm:ml-2 transition-all duration-200 outline-none'>Subscribe</button>
        </form>
        <p className='mt-3 text-white text-xs sm:text-sm'>We care about your data in our <span className='text-blue-500'>Privacy Policy</span></p>
    </div>
  )
}

export default Newsletter;