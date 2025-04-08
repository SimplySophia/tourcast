import { navLinks } from '@/app/contants/contants';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  return (
    <div className={`fixed inset-0 z-[1050] transition-all duration-500 ${showNav ? "visible opacity-100" : "invisible opacity-0"}`}>
      {/* Gray Background (Appears First) */}
      <div className={`fixed inset-0 bg-gray-800 opacity-70 transition-opacity duration-300 ${showNav ? "opacity-70" : "opacity-0"}`}></div>

      {/* Sidebar Menu (Appears After a Delay) */}
      <div className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-rose-900 text-white flex flex-col justify-center space-y-6 
        transition-transform duration-500 delay-200 ${showNav ? "translate-x-0" : "-translate-x-100%"}`}>
        
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url} onClick={closeNav}>
            <p className="text-sm text-white w-fit ml-12 border-b-[1.5px] pb-1 border-white sm:text-2xl">
              {link.label}
            </p>
          </Link>
        ))}

        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-6 right-6 text-white text-3xl sm:text-4xl cursor-pointer z-[1051]"
        />
      </div>
    </div>
  );
};

export default MobileNav;
