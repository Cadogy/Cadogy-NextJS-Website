import Image from 'next/image';
import { logoImages } from '../data/data.js';

const TechSlider = () => {

  return (
    <div className="pt-14 pb-14 leading-7 text-gray-900 bg-white border-b-0 border-solid md:pt-[6rem] md:pb-16">
      
      <h2 className="max-w-[22ch] mx-auto md:max-w-[100%] text-center text-2xl font-normal lg:leading-4 tracking-tight md:text-2xl">
        Building Experiences With the Latest Technologies
      </h2>

        <div className="flex items-center justify-center mt-10">
        {/* 1. */}
        <div className="before:content-[''] before:h-[640px] before:w-[100%] before:z-[100] before:absolute md:before:shadow-[inset_0px_-280px_50px_160px_white] before:shadow-[inset_0px_-280px_50px_80px_white] w-[200%] h-20 overflow-hidden relative">
          {/* 2. */}
          <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-20">
            {/* 3 */}
            {logoImages.map((i, index) => {
              return (
                <div key={index} className="flex justify-center items-start min-w-[100px] max-w-[100px]">
                  <Image src={i} />
                </div>
              );
            })}
            {logoImages.map((i, index) => {
              return (
                <div key={index} className="flex justify-center items-start min-w-[100px] max-w-[100px]">
                  <Image src={i} />
                </div>
              );
            })}
          </div>

        </div>
      </div>

        <div className="flex items-center justify-center">
        {/* 1. */}
        <div className="before:content-[''] before:h-[640px] before:w-[100%] before:z-[100] before:absolute md:before:shadow-[inset_0px_-280px_50px_160px_white] before:shadow-[inset_0px_-280px_50px_80px_white] w-[200%] h-20 overflow-hidden relative">
          {/* 2. */}
          <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate2 gap-20">
            {/* 3 */}
            {logoImages.map((i, index) => {
              return (
                <div key={index} className="flex justify-center items-start min-w-[100px] max-w-[100px]">
                  <Image src={i} />
                </div>
              );
            })}
            {logoImages.map((i, index) => {
              return (
                <div key={index} className="flex justify-center items-start min-w-[100px] max-w-[100px]">
                  <Image src={i} />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  )
}

export default TechSlider;