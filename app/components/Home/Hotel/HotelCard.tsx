import React from 'react'
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';

type Props = {
    hotel: {
        id: number;
        name: string;
        location: string;
        rating: number;
        price: string;
        Image: string;
        reviews: string;
    };
};

const HotelCard = ({ hotel }:Props) => {
  return (
    <div className='relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden'>
        <div className='absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center 
        justify-center flex-col'>
            <FaHeart className='w-3 h-3'/>
        </div>
        <div className='absolute inset-0 bg-black opacity-20 z-10'></div>
        <Image src={hotel.Image} alt={hotel.name} width={500} height={500} className="overflow-hidden h-full
            w-full transition-all duration-300 object-cover group-hover:scale-110" />
    </div>
  )
}

export default HotelCard;