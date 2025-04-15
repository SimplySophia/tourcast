import React from 'react'
import SectionHeading from '../../Helper/SectionHeading';
import NewsCard from './NewsCard';

const News = () => {
  return (
    <div className='pt-16 pb-16'>
        <SectionHeading heading='Exciting Travel News For You' />
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10
        items-center mt-20'>
            <div className=''>
                <NewsCard 
                  image='/images/img1.png' 
                  title='Top 10 place to visit in London'
                  date='08 November 2025'
                />
            </div>
            <div>
                <NewsCard 
                  image='/images/img6.png' 
                  title='Top 10 place to visit in Pakistan'
                  date='25 November 2025'
                />
            </div>
            <div>
                <NewsCard 
                  image='/images/img9.png' 
                  title='Top 10 place to visit in Switzerland'
                  date='15 November 2025'
                />
            </div>
            <div>
                <NewsCard 
                  image='/images/img3.png' 
                  title='Top 10 place to visit in Bangladesh'
                  date='22 November 2025'
                />
            </div>
        </div>
    </div>
  )
}

export default News;