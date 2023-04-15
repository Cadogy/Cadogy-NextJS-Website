import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function FloatingBanner() {
    return (
    <div className='relative  min-w-full min-h-full z-[999]'>
        <div className="z-[999] mx-auto rounded-br-2xl rounded-bl-2xl xl:w-[64.25%] sm:w-[94%]  bg-[#ffffff33]">
            <div className="mx-auto max-w-7xl py-1 px-3 sm:px-6 lg:px-8">
                <div className="sm:px-16 sm:text-center">
                <p className="flex items-center justify-evenly text-white">
                    <span className="lg:hidden">Step into The Web3.0</span>
                    <span className="hidden lg:inline">Our clients are starting to enter Web3.0 - Are you ready to join the future?</span>
                    <span className="block sm:inline-block">
                    <a href="#" className="font-bold text-white">
                        Learn more
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                    </span>
                </p>
                </div>
            </div>
        </div> 
    </div>
  )
}