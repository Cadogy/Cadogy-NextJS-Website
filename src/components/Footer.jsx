import { useEffect, useRef } from 'react';
import { footerNavigation } from '@/data/data';

const Footer = () => {
  const canvasRef = useRef(null);
  const sliderRef = useRef(null);

  let starsElements, starsParams = { speed: 2, number: 300, extinction: 4 };
  let screen = { w: 0, h: 0, c: [0, 0] };

  const Star = function() {
    this.x = Math.random() * screen.w;
    this.y = Math.random() * screen.h;
    this.z = Math.random() * screen.w;

    this.move = function() {
      this.z -= starsParams.speed;
      if (this.z <= 0) {
        this.z = screen.w;
      }
    };

    this.show = function() {
      let x, y, rad, opacity;
      x = (this.x - screen.c[0]) * (screen.w / this.z);
      x = x + screen.c[0];
      y = (this.y - screen.c[1]) * (screen.w / this.z);
      y = y + screen.c[1];
      rad = screen.w / this.z;
      opacity = (rad > starsParams.extinction) ? 1.5 * (2 - rad / starsParams.extinction) : 1;

      const ctx = canvasRef.current.getContext('2d');
      ctx.beginPath();
      ctx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
      ctx.arc(x, y, rad, 0, Math.PI * 2);
      ctx.fill();
    };
  };

  const setupStars = () => {
    screen = {
      w: window.innerWidth,
      h: window.innerHeight,
      c: [ window.innerWidth * 0.5, window.innerHeight * 0.5 ]
    };
    window.cancelAnimationFrame(updateStars);
    canvasRef.current.width = screen.w;
    canvasRef.current.height = screen.h;
    starsElements = [];
    for (let i = 0; i < starsParams.number; i++) {
      starsElements[i] = new Star();
    }
  };

  const updateStars = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    starsElements.forEach((s) => {
      s.show();
      s.move();
    });
    window.requestAnimationFrame(updateStars);
  };

  useEffect(() => {
    setupStars();
    updateStars();
    const slider = sliderRef.current;
    const output = slider.nextElementSibling;
    output.innerHTML = slider.value;
    slider.oninput = function() {
      output.innerHTML = this.value;
      starsParams.speed = this.value;
    };
    window.onresize = function() {
      setupStars();
    };
  }, []);

  ////////

  let ranNum = Math.floor(Math.random() * 15);
  

  return (
    <div className='relative flex justify-center items-center'>
      <canvas id="stars" className="w-full min-h-[1000px] sm:h-full" ref={canvasRef}></canvas>
      <div className="slider absolute flex justify-center items-center">
        <input type="range" min="0.5" max="15" value={ranNum} step="0.5" className="-z-10" ref={sliderRef} />
        <p className="hidden"></p>
      </div>
      <div className="absolute flex flex-col justify-center items-center h-full w-[100%] px-8 lg:gap-40 sm:gap-20 gap-10">
      {/* CTA Row (Top) */}
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-7xl">
          <div className='flex w-full h-full justify-center'>
            <div className='flex flex-col justify-center items-center md:items-start px-4'>
              <h1 className="text-white text-[50px] text-center md:text-left">Embrace the future</h1>
              <p className="text-white max-w-[500px] text-[18px] text-center md:text-left">From web design to security, Cadogy can help you launch your business in a more profitable direction. We are able to create amazing experiences using the integration of web2 tools with web3 tools such as AR/VR/XR, blockchain, metaverses, and more!</p>
              <p className={`group w-full items-center justify-center text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto flex sm:hidden`}>
                <span className="text-sm font-medium mt-3"> Get in touch with our team via our contact page &emsp; </span>
                <svg className="h-5 w-5 self-end" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </p>
            </div>
          </div>
          <div className='hidden md:flex w-full h-full justify-center'>
            <div className='flex md:flex-col flex-row justify-center items-center gap-8'>
              {/* <img src={webLogo} alt="" srcset={webLogo} className="md:max-w-[200px] max-w-[150px]" */}
              <div>
                <ul className={'text-white my-4 flex md:flex-col self-start'}>
                  <li className='hover:scale-110 hover:text-violet-200 transition-all ease-in-out'>✓ &nbsp;&nbsp; Secure your website</li>
                  <li className='hover:scale-110 hover:text-violet-200 transition-all ease-in-out'>✓ &nbsp;&nbsp; Dominate Google rankings</li>
                  <li className='hover:scale-110 hover:text-violet-200 transition-all ease-in-out'>✓ &nbsp;&nbsp; Increase your business volume & reach</li>
                  <li className='hover:scale-110 hover:text-violet-200 transition-all ease-in-out'>✓ &nbsp;&nbsp; Create a metaverse</li>
                  <li className='hover:scale-110 hover:text-violet-200 transition-all ease-in-out'>✓ &nbsp;&nbsp; Innovate your industry</li>
                </ul>
                <p className="group w-full items-center justify-center text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto sm:flex hidden">
                  <span className="text-sm font-medium mt-3"> Get in touch with our team via our contact page &emsp; </span>
                  <svg className="h-5 w-5 self-end" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* FOOTER Row (Bottom) */}
        <footer aria-labelledby="footer-heading" className="w-full max-w-7xl md:pb-14">
        {/* LINKS Row */}
          <div className='flex lg:flex-row flex-col justify-between gap-8'>
            <div className='w-full h-full flex justify-between gap-8 flex-1'>
              {/* Solutions */}
              <div className='w-full'>
                <h3 className="text-base font-medium text-violet-400">Solutions</h3>
                <ul role="list" className="mt-4 flex flex-col gap-4">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-50 hover:text-violet-400">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Support */}
              <div className='w-full'>
                <h3 className="text-base font-medium text-violet-400">Support</h3>
                <ul role="list" className="mt-4 flex flex-col gap-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-50 hover:text-violet-400">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Company */}
              <div className='w-full'>
                <h3 className="text-base font-medium text-violet-400">Company</h3>
                <ul role="list" className="mt-4 flex flex-col gap-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-50 hover:text-violet-400">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Legal */}
              <div className='w-full'>
                <h3 className="text-base font-medium text-violet-400">Legal</h3>
                <ul role="list" className="mt-4 flex flex-col gap-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-50 hover:text-violet-400">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Newsletter */}
            <div className="mb-16 sm:mb-0">
              <h3 className="text-base font-medium text-violet-400">Subscribe to our newsletter</h3>
              <p className="mt-4 text-base text-slate-50">
                The latest news, articles, and resources, sent to your inbox weekly.
              </p>
              <form className="mt-4 sm:flex md:mb-12 sm:mb-32">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-violet-400 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-indigo-500"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-[black] bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </footer>
      {/* INFOBAR Row */}
        <div className=" px-8 gap-8 absolute bottom-0 md:w-full py-6">
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
      </div>
    </div>
  );
};

export default Footer;