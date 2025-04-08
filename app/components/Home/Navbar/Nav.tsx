'use client';
import { navLinks } from '@/app/contants/contants';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2';
import { TbAirBalloon } from 'react-icons/tb';

type Props = {
    openNav: () => void;
}
const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 90) {
          setNavBg(true);
        } else {
          setNavBg(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <div
        className={`fixed top-0 left-0 w-full h-[12vh] transition-all duration-200 z-[1050] 
        ${navBg ? "bg-gray-800 bg-opacity-70 shadow-md" : "bg-transparent"}`}
      >
        <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center">
              <TbAirBalloon className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl md:text-2xl text-white uppercase font-bold">Tripi</h1>
          </div>
  
          <div className="hidden lg:flex items-center uppercase space-x-10">
            {navLinks.map((link) => (
              <Link href={link.url} key={link.id}>
                <p className="relative text-white text-base font-medium after:block after:content-[''] after:absolute after:bottom-[3px] after:left-0 after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-right">
                  {link.label}
                </p>
              </Link>
            ))}
          </div>
  
          <div className="flex items-center space-x-4">
            <button className="bg-white text-black text-base py-2 px-8 md:px-12 md:py-2.5 rounded-lg transition-all duration-200 hover:bg-gray-200">
              Book Now
            </button>
            <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
          </div>
        </div>
      </div>
    );
  };

export default Nav;
  