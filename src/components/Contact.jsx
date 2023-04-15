import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ContactNav, ContactFloatingBanner, TinyFooter } from '.';

const data = [
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
  },
];

const Contact = () => {const canvasRef = useRef(null);
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
  
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState(null);

  function sendEmail(e) {
    e.preventDefault();

    if (!name || !email || !message) {
      setAlert('Please fill out all fields.');
      return;
    }

    emailjs.sendForm('dsafgmail', 'template_wtkvnkw', e.target, 'dA46sT_O20JFD3DUF')
      .then((result) => {
        console.log(result.text);
        setName('');
        setEmail('');
        setMessage('');
        setAlert('Request processed, message sent!');
      }, (error) => {
        console.log(error.text);
        setAlert('Failed to send message. Please try again.');
      });
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative flex justify-center items-center overflow-hidden'>
      <canvas id="stars" className="w-full min-h-[1000px] sm:h-full" ref={canvasRef}></canvas>
      <div className="slider absolute flex justify-center items-center">
      <input type="range" min="0.5" max="15" value={ranNum} step="0.5" className="-z-10" ref={sliderRef} />
        <p className="hidden"></p>
      </div>
      <div className="absolute top-0 w-[100vw]">
        <ContactFloatingBanner />
        <ContactNav />
      </div>
      <div id='contact' className='absolute flex flex-col justify-center items-center overflow-x-hidden w-full'>
        <div className='w-full h-full lg:pt-[10rem] sm:pt-[15rem] flex flex-col items-center justify-center'>
          <div className='max-w-6xl px-5 flex flex-col justify-start lg:items-center'>
            <h1 className='text-[44px] font-bold pb-3 text-white'>Contact Us</h1>
            <p className='lg:text-center text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, architecto asperiores inventore cumque neque et quidem exercitationem dolorum ab, amet nisi? Voluptatibus, officia eius ea quos eaque obcaecati tempora incidunt!</p>
          </div>
          <section className="text-center text-gray-200 flex lg:flex-row flex-col-reverse items-center justify-center h-full w-full">
            <div className="xl:max-w-[45%] max-w-full w-full sm:flex hidden justify-center mx-auto px-5 lg:p-6 h-full max-h-[815px] lg:px-6">
              <div className="bg-[#ffffff33] border border-gray-200 divide-y divide-gray-200 rounded-xl w-full">
                {data.map((item, index) => (
                  <details className="group p-6 [&_summary::-webkit-details-marker]:hidden" key={index} onToggle={(e) => setIsOpen(e.target.open)}>
                    <summary className="flex items-center justify-between cursor-pointer">
                      <h2 className="text-lg font-medium text-gray-200">{item.title}</h2>

                      <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </summary>

                    <p className="mt-4 leading-relaxed text-gray-300">{item.content}</p>
                  </details>
                ))}
              </div>
            </div>
            <div className="xl:max-w-[45%] max-w-full w-full mx-auto px-5 lg:px-6 lg:h-[500px] lg:py-0 py-10 lg:pb-0 mb-10 flex flex-col justify-center">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group mb-6">
                  <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#ffffff33] bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-[#ffffff66] active:bg-[#ffffff66] focus:border-violet-600 focus:outline-none" id="exampleInput7" placeholder="Name" name="user_name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group mb-6">
                  <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#ffffff33] bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-[#ffffff66] focus:border-violet-600 focus:outline-none" id="exampleInput8" placeholder="Email address" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group mb-6">
                  <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#ffffff33] bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-[#ffffff66] focus:border-violet-600 focus:outline-none" id="exampleFormControlTextarea13" rows="3" placeholder="Message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <button type="submit" className="w-full px-6 py-2.5 bg-violet-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-violet-500 hover:shadow-lg focus:bg-violet-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-500 active:shadow-lg transition duration-150 ease-in-out">Send</button>
              </form>
            </div>
          </section>
        </div>
        <TinyFooter className='-pb-10' />
      </div>
    </div>
  )
}

export default Contact