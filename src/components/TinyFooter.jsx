import React from 'react';
import { footerNavigation } from '@/data/data';

const TinyFooter = () => {
  return (
    <div className=" px-8 gap-8 md:w-full pt-24">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
            <div className="flex gap-8">
                {footerNavigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-slate-50">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
                ))}
            </div>
            <p className="text-base text-gray-400 md:order-1">
                &copy; 2023 Cadogy, LLC. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default TinyFooter
