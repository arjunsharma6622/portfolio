import React, {useEffect} from 'react';
import { initializeSmoothScroll } from './SmoothScroll';




function Header() {

  useEffect(() => {
    initializeSmoothScroll(); // Initialize smooth scrolling
  }, []);

  
  return (
    <div>
    <header className=" text-white py-8 relative" id='home'>
              <div className="w-96 h-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className=" w-96 h-48 absolute bg-blue-600 bg-opacity-50 rounded-full blur-3xl" />
          <div className=" w-96 h-48 left-64 absolute bg-blue-600 bg-opacity-50 rounded-full blur-3xl" />
          <div className=" w-96 h-48 right-64 absolute bg-blue-600 bg-opacity-50 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto flex justify-between items-center lg:w-8/12 md:1/2 max-[740px]:w-[100%] max-[740px]:flex-col max-[740px]:gap-4 max-[370px]:w-[100%] px-4 py-4 rounded-xl" style={{ background: 'rgba(26, 26, 26, 0.483)', backdropFilter: 'blur(0.4px)' }}>
        <div>
          <h1 className="text-2xl font-bold">🙂 Arjun Sharma</h1>
        </div>
        <nav className="space-x-4 max-[370px]:hidden">
          <a href="#about" className=" hover:text-accent2 transition duration-300">About</a>
          <a href="#skills" className=" hover:text-accent2 transition duration-300">Skills</a>
          <a href="#experience" className=" hover:text-accent2 transition duration-300">Experience</a>
          <a href="#projects" className=" hover:text-accent2 transition duration-300">Projects</a>
          <a href="#contact" className=" hover:text-accent2 transition duration-300">Contact</a>
        </nav>
      </div>
    </header>



    </div>
  );
}

export default Header;
