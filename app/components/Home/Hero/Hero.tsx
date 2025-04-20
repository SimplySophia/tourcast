import React from 'react'
import SearchBox from '../../Helper/SearchBox'
import Link from 'next/link'


const Hero = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
      <video 
        src='/images/hero1.mp4'
        autoPlay 
        loop 
        muted 
        preload='metadata'
        className='absolute inset-0 w-full h-full object-cover'/>
      
      <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
      
      <div className='absolute z-[100] flex items-center justify-center w-full h-full'>
        <div className='flex items-center justify-center flex-col w-full h-full'>
          <div data-aos="fade-up">
            <h1 className='text-[20px] mb-0 md:mb-8 text-center md:text-[30px] lg:text-[40px] tracking-[0.7rem] text-white font-bold uppercase'>
              Discover Your Next Adventure
            </h1>
            <p className='md:text-base text-center text-lg text-white font-normal [word-spacing:5px]'>
              Lorem ipsum, dolor sit amet consectetur.
            </p>
          </div>
          {/*Searchbox */}
          <SearchBox />
          <Link 
            href="#" 
            className="rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-red-600 
           hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2
           hover:ring-red-400 transition-all ease-out duration-300  relative"
           >

            <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform
            translate-x-12 bg-white opacity-10 rotate-12 group-hover:translate-x-40 ease'></span>
            <span className='relative font-bold'>Search</span>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Hero