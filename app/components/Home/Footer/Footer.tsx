import Link from 'next/link';
import React from 'react'
import { FaDribbble, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Company</h1>
                <ul className='space-y-2'>
                    <li className='text-sm text-gray-500 hover:text-blue-950 cursor-pointer'>About Us</li>
                    <li className='text-sm text-gray-500 hover:text-blue-950 cursor-pointer'>Careers</li>
                    <li className='text-sm text-gray-500 hover:text-blue-950 cursor-pointer'>Blog</li>
                    <li className='text-sm text-gray-500 hover:text-blue-950 cursor-pointer'>Gift Cards</li>
                    <li className='text-sm text-gray-500 hover:text-blue-950 cursor-pointer'>Magazine</li>
                </ul>
            </div>
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Support</h1>
                <ul className='space-y-2'>
                    <li className='text-sm text-gray-500 hover:text-blue-950 cursor-pointer'>Contact</li>
                    <li className='text-sm text-gray-500 hover:text-blue-950 cursor-pointer'>Legal Notice</li>
                    <li className='text-sm text-gray-500 hover:text-blue-950 cursor-pointer'>Privacy Policy</li>
                    <li className='text-sm text-gray-500 hover:text-blue-950 cursor-pointer'>Terms and Conditions</li>
                    <li className='text-sm text-gray-500 hover:text-blue-950 cursor-pointer'>SiteMap</li>
                </ul>
            </div>
        
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Other Services</h1>
                <ul className='space-y-2'>
                    <li className='text-sm text-gray-500 hover:text-blue-950 cursor-pointer'>Car hire</li>
                    <li className='text-sm text-gray-500 hover:text-blue-950 cursor-pointer'>Activity Finder</li>
                    <li className='text-sm text-gray-500 hover:text-blue-950 cursor-pointer'>Tour List</li>
                    <li className='text-sm text-gray-500 hover:text-blue-950 cursor-pointer'>Flight Finder</li>
                    <li className='text-sm text-gray-500 hover:text-blue-950 cursor-pointer'>Travel Agent</li>
                </ul>
            </div>
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Contact</h1>
                <div>
                <p className='text-sm text-gray-500 hover:text-blue-950 cursor-pointer'>Our Mobile Number</p>
                <span>+23476001111</span>
                </div>

                <div>
                    <p className='text-sm text-gray-500 hover:text-blue-950 cursor-pointer'>Our Email Address</p>
                    <span>example@gmail.com</span>
                </div>
            </div>
        </div>
        <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
            <p className='text-center md:text-left'>Copyright @ 2025 Web. All rights reserved</p>
            <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                <span>Social : </span>
                <Link href='#' className='text-gray-500 hover:text-gray-800'>
                    <FaFacebook />
                </Link>
                <Link href='#' className='text-gray-500 hover:text-gray-800'>
                    <FaXTwitter />
                </Link>
                <Link href='#' className='text-gray-500 hover:text-gray-800'>
                    <FaDribbble />
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Footer;