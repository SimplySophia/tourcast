import React from 'react'
import SectionHeading from '../../Helper/SectionHeading';
import WhyChooseCard from './WhyChooseCard';
import Image from 'next/image';

const WhyChoose = () => {
  return (
    <div className='pt-16 pb-24'>
        <SectionHeading heading='Why Choose Us' />
        <div className='grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20'>
            <div>
                <WhyChooseCard image="/public/file.svg" title="Best Price Guarantee"/>
            </div>
            <div>
                <WhyChooseCard image="/public/file.svg" title="Easy & Quick Booking"/>
            </div>
            <div>
                <WhyChooseCard image="/public/file.svg" title="Customer Care 24/7"/>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose;