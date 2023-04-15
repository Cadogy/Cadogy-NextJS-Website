import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { buttonInfo } from '@/data/data';
import mobileImage from '@/../public/mockup-mobile.png';
import tabletImage from '@/../public/mockup-tablet.png';
import desktopImage from '@/../public/mockup-desktop.png';

const Responsitivity = () => {
  let subtitle = '';
  let title = '';
  let body = ``;
  let alt = '';
  let iconAlt = '';
  let color = ''

  const [deviceTitle, setDeviceTitle] = useState('');
  const [deviceSubtitle, setDeviceSubtitle] = useState('');
  const [deviceBody, setDeviceBody] = useState('');
  const [deviceAlt, setDeviceAlt] = useState('');
  const [deviceImage, setDeviceImage] = useState();
  const [active, setActive] = useState('');

  function handleClick(id) {
    if (id == 'handleMobile') {
      setActive(id);
      setDeviceAlt('mobile responsitivity');
      setDeviceImage(mobileImage);
      setDeviceSubtitle('Responsive Wed Design - Mobile');
      setDeviceTitle('Our mobile-first approach ensures customers can access your website anywhere.');
      setDeviceBody(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`);
    } else if (id == 'handleTablet') {
      setActive(id);
      setDeviceAlt('tablet responsitivity');
      setDeviceImage(tabletImage);
      setDeviceSubtitle('Responsive Wed Design - Tablet');
      setDeviceTitle('Make ordering easier for customers and clients with tablet-friendly solutions.');
      setDeviceBody(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`);
    } else if (id == 'handleDesktop') {
      setActive(id);
      setDeviceAlt('tablet responsitivity');
      setDeviceImage(desktopImage);
      setDeviceSubtitle('Responsive Wed Design - Desktop');
      setDeviceTitle('Make ordering easier for customers and clients with tablet-friendly solutions.');
      setDeviceBody(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`);
    }
  }

  return (
    <div className='w-full h-full my-8 flex flex-col items-center'>
      <div className='flex md:flex-row flex-col-reverse xl:max-w-7xl mx-7'>
        {/* Body Template for useState */}
        {active == '' ? handleClick('handleMobile') : ''}
        <div className='w-full h-full'>
          <p id="subtitle" className='uppercase'>{deviceSubtitle}</p>
          <div className='flex flex-col mb-8'>
            <h1 id="title" className='font-medium text-[40px] my-8'>{deviceTitle}</h1>
            <p id="body" className='text-[20px]'>{deviceBody}</p>
          </div>
          {/* Buttons Tablet & Desktop */}
          <div className='items-end gap-12 h-[80px] hidden md:flex'>
            {buttonInfo.map((button, index) => (
              <div className="group relative block h-20 w-20 first:hover:-mr-0 hover:-mr-0 hover:-translate-x-2 hover:-translate-y-2" key={index} onClick={() => handleClick(button.id)}>
                <span className=" rounded-[15px] absolute inset-0 border-2 border-dashed border-black bg-violet-200"></span>
                <div className="relative flex h-20 rounded-[15px] w-20 transform justify-center items-center border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <div className="transition-opacity group-hover:absolute group-hover:opacity-0">
                    <Image src={button.icon} alt={button.alt} className={`h-[40px] w-[40px]`} />
                  </div>
                  <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                    <p className="my-4 font-bold">{button.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Buttons Mobile */}
        <div className='justify-center items-center gap-12 h-[120px] md:hidden flex'>
          {buttonInfo.map((button, index) => (
            <div className="group relative block h-30 w-30 first:hover:-mr-3 hover:-mr-2.5 last:hover:-ml-4 hover:-translate-x-2 hover:-translate-y-2" key={index} onClick={() => handleClick(button.id)}>
              <span className=" rounded-[15px] absolute inset-0 border-2 border-dashed border-black bg-violet-200"></span>
              <div className="relative flex h-30 rounded-[15px] w-30 transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  <Image src={button.icon} alt={button.alt} className={`h-[40px] w-[40px]`} />
                </div>
                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                  <p className="my-4 font-bold">{button.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Right Column */}
        <div className='flex md:justify-end justify-center items-center w-full max-h-[730px]'>
          <Image src={deviceImage} alt={deviceAlt} />
        </div>
      </div>
    </div>
  )
}

export default Responsitivity