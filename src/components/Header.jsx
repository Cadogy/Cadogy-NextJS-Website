// import Atropos component
import Atropos from 'atropos/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <div className="heroAbsolute bg-white">
      <main>
        
        <div className="relative">
          <div className="border-t-0 border-solid absolute inset-x-0 bottom-0 h-1/2 bg-white" />
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <Atropos className="z-[200] rounded-2xl" activeOffset={20} shadow={true} rotateXMax={1} rotateYMax={1}>
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover blur-[3px]"
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#7b71f7] to-[#af61f0] mix-blend-multiply" />
              </div>
              
              <div className="relative px-4 py-12 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span data-atropos-offset="0.75" className="block text-white mb-3">Building More Than Websites</span>
                  <span data-atropos-offset="1" className="block text-indigo-200">We Build Your Business</span>
                </h1>
                <p data-atropos-offset="0.75" className="hidden md:flex mx-auto mt-6 max-w-lg text-center text-md md:text-xl text-indigo-200 sm:max-w-3xl">
                  Skillfully solving business challenges through a smart, data-driven approach to the web development and search engine optimization process.
                </p>
              </div>
            </div>
            </Atropos>
          </div>
        </div>

      </main>
    </div>
  )
}
