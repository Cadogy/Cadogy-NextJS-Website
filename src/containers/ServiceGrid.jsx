import React from 'react';
import InteractiveCard from '../components/InteractiveCard';
import { homepageServices } from '@/data/data';

const ServiceGrid = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center py-3 pb-16 mx-auto">
      <div className='flex flex-col justify-around max-w-7xl mb-6 mx-6'>
        <p className='uppercase'>Our Mission</p>
        <div className='flex md:flex-row flex-col my-4'>
          <h1 className='font-medium text-[40px] md:w-[50%]'>Conjure the future through modern technology and impactful design.</h1>
          <div className='flex flex-col lg:pl-20 mt-4 md:w-[50%] h-[100%]'>
            <p className='text-[20px]'>We utilize trending technologies and the power of artificial intelligence to create digital experiences that are secure, responsive, and immersive.</p>
            <p className='text-[24px] font-bold mt-4 cursor-pointer'>View all services →</p>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap justify-evenly xl:max-w-6xl flex-col lg:flex-row w-full'>
        <div className='lg:w-[66%] w-full card-zoom'>
          <div className={`mainBlock flex border border-violet-300 rounded-3xl group bg-blurredServices hover:bg-unblurredServices bg-cover bg-center transition-all ease-in hover:ease-out m-4 justify-end min-h-[19.5rem] p-[2rem] cursor-pointer `}>
            <div className='flex flex-col justify-end items-start w-full'>
              <h1 className={`glowtext text-shadow-1 font-bold text-[26px] text-violet-200 max-w-[55%] mb-3`}>Learn more about how we shape the future of the web</h1>
              <button className='text-violet-200'>  <span
                class="
                  bg-gradient-to-r from-violet-200 to-violet-200
                  bg-no-repeat [background-position:0_88%]
                  [background-size:100%_0.1em]
                  motion-safe:transition-all motion-safe:duration-200
                  group-hover:[background-size:100%_100%]
                  group-hover:text-violet-800
                  focus:[background-size:100%_100%]
                  px-2 py-1 rounded-2xl
                "
              >Learn More →</span></button>
            </div>
          </div>
        </div>
        {homepageServices.map((service, index) => (
          <InteractiveCard key={index} icon={service.icon} title={service.title} subtitle={service.subtitle} body={service.body} />
        ))}
      </div>
    </div>
  )
}

export default ServiceGrid