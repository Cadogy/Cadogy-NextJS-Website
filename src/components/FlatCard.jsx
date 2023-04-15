import React from 'react';
import { featuredDetails, secondaryDetails } from '../data/data';

const FlatCard = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center mx-4 my-4 md:gap-8 gap-2">

      {/* COLUMN 1 - LEFT */}
      {featuredDetails.map((card, index) => (
      <div key={index} className="flex items-center flex-col select-none hover:cursor-pointer bg-white border-[1px] rounded-3xl hover:shadow-xl ease-in-out duration-300 w-full sm:min-h-full max-h-full">
        {/* IMAGE CONTAINER */}
        <div className="flex m-4 xl:m-0 xl:my-4 max-h-[177px] max-w-[518px]">
          <img className="mx-auto object-cover rounded-2xl w-full" src={card.icon} alt="" />
        </div>
        {/* DETAILS CONTAINER */}
        <div className="max-w-[90%] pb-3 md:pb-0 mx-auto text-[#808191]">
          <div>
            <p className="font-mono py-3 font-bold text-[12px] text-[#92a0b3]">
              {card.category}
            </p>
            <h1 className="max-w-[100%] mx-auto font-[500] text-[#3d3d3d] text-[24px]">
              {card.title}
            </h1>
            <p className="text-[17px] mb-3">
              {card.description}
            </p>
          </div>
        </div>

      </div>        
      ))}

      {/* COLUMN 2 - RIGHT */}
      <div className="flex-col w-full">
      {secondaryDetails.map((card, index) => (
        <div key={index} className="md:first:mb-4 first:mb-2">
        {/* ROW 1 */}
        <div className="flex flex-col sm:flex-row items-center select-none hover:cursor-pointer bg-white border-[1px] rounded-3xl hover:shadow-xl ease-in-out duration-300">
          {/* IMAGE CONTAINER */}
          <div className="flex m-4 my-4 max-h-[177px] max-w-[518px]">
            <img className="sm:w-[160px] sm:h-[150px] object-cover rounded-2xl w-full" src={card.icon} alt="" />
          </div>
          {/* TITLE CONTAINER */}
          <div className='mx-4 md:mx-2 mb-4 md:mb-4 md:my-2 self-start'>
            <p className="font-mono py-2 font-bold text-[12px] text-[#92a0b3]">
              {card.category}
            </p>
            <h1 className="md:max-w-[24ch] font-[500] text-[#3d3d3d] sm:text-[24px] text-[18px]">
                {card.title}
            </h1>
          </div>
        </div>
      </div>
      ))}
      </div>

    </div>
  )
}

export default FlatCard;