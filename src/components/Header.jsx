import React, {useEffect, useState} from 'react';
import { initializeSmoothScroll } from './SmoothScroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { HiMenuAlt4 } from "react-icons/hi";
import SocialMedia from './Social';
import { socialLinks } from '../data';





function Header() {

  useEffect(() => {
    initializeSmoothScroll(); // Initialize smooth scrolling
  }, []);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  
  return (
    <div>
    <header className=" relative text-white md:py-8" id='home'>
              <div className="w-96 h-96 hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className=" w-96 h-48 absolute bg-blue-600 bg-opacity-50 rounded-full blur-3xl" />
          <div className=" w-96 h-48 left-64 absolute bg-blue-600 bg-opacity-50 rounded-full blur-3xl" />
          <div className=" w-96 h-48 right-64 absolute bg-blue-600 bg-opacity-50 rounded-full blur-3xl" />
        </div>
              <div className="w-full h-96 md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-48 absolute bg-blue-600 bg-opacity-50 rounded-full blur-3xl" />
          <div className="w-full h-48 absolute bg-blue-600 bg-opacity-50 rounded-full blur-3xl" />
          {/* <div className="w-full h-48 right-64 absolute bg-blue-600 bg-opacity-50 rounded-full blur-3xl" /> */}
        </div>
        <div className="container mx-auto flex justify-between  items-center md:w-8/12 md:1/2 max-[740px]:w-[100%] max-[740px]:gap-4 max-[370px]:w-[100%] px-2 py-3 md:px-4 md:py-4 rounded-xl" style={{ background: 'rgba(26, 26, 26, 0.483)', backdropFilter: 'blur(0.4px)' }}>
        <div>
          <h1 className="text-xl md:text-2xl font-bold">🙂 Arjun Sharma</h1>
        </div>
        <nav className="space-x-4 hidden md:block">
          <a href="#about" className=" hover:text-accent2 transition duration-300">About</a>
          <a href="#skills" className=" hover:text-accent2 transition duration-300">Skills</a>
          <a href="#experience" className=" hover:text-accent2 transition duration-300">Experience</a>
          <a href="#projects" className=" hover:text-accent2 transition duration-300">Projects</a>
          <a href="#contact" className=" hover:text-accent2 transition duration-300">Contact</a>
        </nav>

        {/* mobile menu div */}



        <HiMenuAlt4 className="w-6 h-6 md:hidden" onClick={() => setShowMobileMenu(true)}/>

        
      </div>

      { showMobileMenu &&

<div className='fixed h-[100vh] z-[1000] top-0 left-0 bg-opacity-90 filter backdrop-blur-[2px] w-full bg-black flex justify-start gap-20 py-8 items-center flex-col'>
  <div className='w-full items-end flex justify-end pr-10'>
    <FiX className="w-6 h-6 md:hidden" onClick={() => setShowMobileMenu(false)}/>
  </div>
  
      <div className='flex flex-col gap-4 items-start text-lg justify-center'>
          <a href="#about" onClick={() => setShowMobileMenu(false)} className=" hover:text-accent2 transition duration-300">About</a>
          <a href="#skills" onClick={() => setShowMobileMenu(false)} className=" hover:text-accent2 transition duration-300">Skills</a>
          <a href="#experience" onClick={() => setShowMobileMenu(false)} className=" hover:text-accent2 transition duration-300">Experience</a>
          <a href="#projects" onClick={() => setShowMobileMenu(false)} className=" hover:text-accent2 transition duration-300">Projects</a>
          <a href="#contact" onClick={() => setShowMobileMenu(false)} className=" hover:text-accent2 transition duration-300">Contact</a>
        </div>
        <div className='flex gap-4'>
          {
            socialLinks.map((social, index) => (
              <a href={social.link} key={index} target="_blank" rel="noopener noreferrer" className="text-accent1 hover:text-accent2 transform my-1">
                <img src={social.icon} alt="" className='h-8 w-8'/>
              </a>
            ))
          }

        </div>


        </div>

}
      
    </header>



    </div>
  );
}

export default Header;