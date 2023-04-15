import { Fragment } from 'react'
import { DevelopmentMenu, CMSMenu, CommunityDevelopment, Web3Development, SecurityOptimization, BrandingDesign, ContentCreation, solutions, aboutUs } from '../data/nav'
import { Popover, Transition } from '@headlessui/react'
import Image from 'next/image'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import CadShield from '../../public/cadogy-shield.svg'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navigation = () => {
  return (
    <div>
      <header id='navbar'>
        <Popover className="z-[900] relative bg-[rgba(0,0,0,0.0)]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            
              {/*******************************/}
              {/* LOGO SVG NAVIGATION SECTION */}
              {/*******************************/}

            <div className="flex justify-start lg:w-0 lg:flex-1 min-w-[40px]">
              <a href="/">
                <span className="sr-only">Cadogy</span>
                <Image
                  className="hover:scale-[1.15] transition-[0.3] h-8 w-full sm:h-10"
                  src={CadShield}
                  alt="Cadogy"
                />
              </a>
            </div>

            <div className="-my-2 -mr-2 lg:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            <Popover.Group as="nav" className="hidden space-x-10 lg:flex items-center">

              {/**********************************/}
              {/* DEVELOPMENT NAVIGATION SECTION */}
              {/**********************************/}

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none'
                      )}
                    >
                      <span>Development</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-md transform lg:-ml-[8.15rem] lg:max-w-7xl">
                        <div className="overflow-hidden shadow-lg rounded-2xl ring-1 ring-black ring-opacity-5">
                            
                            {/*************/}
                            {/* FULLSTACK */}
                            {/*************/}
                            
                            
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-6 lg:grid-cols-4">
                                <div className="max-w-[20ch] flex items-start rounded-lg p-0 m-auto justify-center sm:p-0 font-medium pt-3 bg-white">Fullstack Development Solutions</div>
                                {DevelopmentMenu.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-red-50/40 items-center"
                                >
                                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#a04646] text-white sm:h-[3rem] sm:w-12`}>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <div className="ml-4">
                                    <p className="text-base text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                </a>
                                ))}
                            </div>
                            <hr className="border-t-[#f0f0f0]"/>

                            {/**************/}
                            {/* CMS SYSTEM */}
                            {/**************/}

                            
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-6 lg:grid-cols-4">
                                <div className="max-w-[20ch] flex items-start rounded-lg p-0 m-auto justify-center sm:p-0 font-medium pt-3 bg-white">Content Management Solutions</div>
                                {CMSMenu.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 items-center"
                                >
                                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#3f3d4a] text-white sm:h-[3rem] sm:w-12`}>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <div className="ml-4">
                                    <p className="text-base text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                </a>
                                ))}
                            </div>
                            <hr className="border-t-[#f0f0f0]"/>

                            {/*****************/}
                            {/* COMMUNITY DEV */}
                            {/*****************/}

                            
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-6 lg:grid-cols-4">
                                <div className="max-w-[20ch] flex items-start rounded-lg p-0 m-auto justify-center sm:p-0 font-medium pt-3 bg-white">Communities & Forum Solutions</div>
                                {CommunityDevelopment.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-green-50/60 items-center"
                                >
                                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#434a3d] text-white sm:h-[3rem] sm:w-12`}>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <div className="ml-4">
                                    <p className="text-base text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                </a>
                                ))}
                            </div>
                            <hr className="border-t-[#f0f0f0]"/>

                            {/************/}
                            {/* WEB3 DEV */}
                            {/************/}

                            
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-6 lg:grid-cols-4">
                                <div className="max-w-[20ch] flex items-start rounded-lg p-0 m-auto justify-center sm:p-0 font-medium pt-3 bg-white">Web3, Metaverse & AR/VR Solutions</div>
                                {Web3Development.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-yellow-50/50 items-center"
                                >
                                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#998f55] text-white sm:h-[3rem] sm:w-12`}>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <div className="ml-4">
                                    <p className="text-base text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                </a>
                                ))}
                            </div>

                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              {/***************************/}
              {/* WEB SECURITY NAVIGATION */}
              {/***************************/}

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none'
                      )}
                    >
                      <span>Web Management</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-md transform lg:-ml-[4rem]">
                        <div className="overflow-hidden shadow-lg rounded-2xl ring-1 ring-black ring-opacity-5">            
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-6 lg:grid-cols-1">
                                {SecurityOptimization.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 items-center"
                                >
                                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#3d3d4a] text-white sm:h-[3rem] sm:w-12`}>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <div className="ml-4">
                                    <p className="text-base text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                </a>
                                ))}
                            </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              {/******************************/}
              {/* BRANDING DESIGN NAVIGATION */}
              {/******************************/}

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none'
                      )}
                    >
                      <span>Design</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-md transform lg:-ml-[4rem]">
                        <div className="overflow-hidden shadow-lg rounded-2xl ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-6 lg:grid-cols-1">
                                {BrandingDesign.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 items-center"
                                >
                                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#3d3d4a] text-white sm:h-[3rem] sm:w-12`}>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <div className="ml-4">
                                    <p className="text-base text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                </a>
                                ))}
                            </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              {/*******************************/}
              {/* CONTENT CREATION NAVIGATION */}
              {/*******************************/}

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none'
                      )}
                    >
                      <span>Content</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-md transform lg:-ml-[4rem]">
                        <div className="overflow-hidden shadow-lg rounded-2xl ring-1 ring-black ring-opacity-5">
                            
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-6 lg:grid-cols-1">
                                {ContentCreation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 items-center"
                                >
                                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#3d3d4a] text-white sm:h-[3rem] sm:w-12`}>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <div className="ml-4">
                                    <p className="text-base text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                </a>
                                ))}
                            </div>

                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              {/*******************************/}
              {/* ABOUT US NAVIGATION SECTION */}
              {/*******************************/}

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none'
                      )}
                    >
                      <span>About</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-md transform lg:-ml-[4rem]">
                        <div className="overflow-hidden shadow-lg rounded-2xl ring-1 ring-black ring-opacity-5">

                            {/*******************************/}
                            {/* ABOUT US NAVIGATION SECTION */}
                            {/*******************************/}

                            
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-6 lg:grid-cols-1">
                                {aboutUs.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 items-center"
                                >
                                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#3d3d4a] text-white sm:h-[3rem] sm:w-12`}>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <div className="ml-4">
                                    <p className="text-base text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                </a>
                                ))}
                            </div>

                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>


              {/**********************************/}
              {/* EXTRA LINKS NAVIGATION SECTION */}
              {/**********************************/}

            </Popover.Group>

              {/*********************************/}
              {/* RIGHT SIDE NAVIGATION SECTION */}
              {/*********************************/}

            <div className="hidden items-center justify-end md:flex md:flex-[1_1_25%] lg:w-0">
              <a href="/blog" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Blog
              </a>
              <a
                href="/contact-us"
                className="hover:scale-[1.05] transition-[0.3] hover:bg-[#222] bg-[black] ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-2xl border border-transparent bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700">
                Contact Us
              </a>
            </div>
          </div>

              {/* END DESKTOP NAVIGATION */}

              {/*****************************/}
              {/* MOBILE NAVIGATION SECTION */}
              {/*****************************/}

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="border divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-0 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-0">
                    <nav className="grid grid-cols-2 gap-7">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                        >
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[black] text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="flex flex-row-reverse flex-wrap justify-between items-center px-6 py-6">
                  <div className="flex basis-[calc(50% - 40px)] justify-center flex-col gap-4">
                    <a href="/our-story" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Our Story
                    </a>
                    <a href="/our-impact" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Our Impact
                    </a>
                    <a href="/digital-experiences" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Digital Experiences
                    </a>
                    <a href="/case-studies" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Case Studies
                    </a>
                  </div>
                  <div className="mt-6">
                    <a
                      href="/blog"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-[black] bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                    >
                      Read Our Blog
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      <a href="/contact-us" className="text-gray-900">
                        Contact Us
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>
    </div>
  )
}

export default Navigation