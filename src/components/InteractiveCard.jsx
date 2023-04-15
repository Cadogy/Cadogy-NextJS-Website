import React from 'react';
import Image from 'next/image';

const InteractiveCard = (props) => {
  return (
    <div className='lg:w-[33%]'>
        <div className="flex flex-col border border-slate-300 hover:border-indigo-500 rounded-3xl m-4 justify-between h-[19.5rem] p-[2rem] hover:shadow-xl hover:shadow-violet-200 ease-in-out duration-300 cursor-pointer group hover:bg-violet-50">
            <div>    
                <Image src={props.icon} alt={props.subtitle} className="iconImage max-w-[5rem] group-hover:max-w-[2.5rem] ease-in-out duration-200 group-hover:color-violet-300" />
            </div>
            <div className="hoverBounce">
                <p className='text-[0.75rem] text-slate-400 group-hover:text-violet-400 uppercase tracking-widest'>{props.subtitle}</p>
                <h2 className='font-medium tracking-wide text-[1.5rem] mt-2'>{props.title}</h2>
                <div className='opacity-0 display-none mt-4 group-hover:opacity-100 transition duration-200 transform group-hover:-translate-y-2'>
                    <h4 className='max-h-0 overflow-hidden group-hover:max-h-full mt-6 transition duration-200 transform group-hover:-translate-y-2'>{props.body}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InteractiveCard;