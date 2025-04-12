import React from 'react'
import SectionHeading from '../../Helper/SectionHeading';
import WhyChooseCard from './WhyChooseCard';

const WhyChoose = () => {
  return (
    <div className='pt-16 pb-24'>
        <SectionHeading heading='Why Choose Us' />
        <div className='grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20'>
            <div>
                <WhyChooseCard image="/images/price2.jpg" title="Best Price Guarantee"/>
            </div>
            <div>
                <WhyChooseCard image="/images/booking.jpg" title="Easy & Quick Booking"/>
            </div>
            <div>
                <WhyChooseCard image="/images/customer1.jpg" title="Customer Care 24/7"/>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose;