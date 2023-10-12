import React, { useEffect, useState } from 'react';

const SecondaryNavigation = () => {
  const [showSecondaryNav, setShowSecondaryNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSecondaryNav(true);
      } else {
        setShowSecondaryNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`text-white text-base  ${showSecondaryNav ? 'opacity-100' : 'opacity-0'} duration-300`}>
    <nav className="fixed -left-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center bg-primary border-primary text-white py-1 -px-2">




      <a href="#contact" className="text-accent1 hover:text-accent2 transform -rotate-90 my-10">
        Contact
      </a>
      <a href="#projects" className="text-accent1 hover:text-accent2 transform -rotate-90 my-10">
        Projects
      </a>
      <a href="#experience" className="text-accent1 hover:text-accent2 transform -rotate-90 my-10">
        Experience
      </a>
      <a href="#skills" className="text-accent1 hover:text-accent2 transform -rotate-90 my-10">
        Skills
      </a>
      <a href="#about" className="text-accent1 hover:text-accent2 transform -rotate-90 my-10">
        About
      </a>
      <a href="#home" className="text-accent1 hover:text-accent2 transform my-1">
        <img src="./images/home.svg" alt="" />
      </a>
    </nav>
      </div>
  );
};

export default SecondaryNavigation;
