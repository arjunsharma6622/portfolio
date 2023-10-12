// import React, { useEffect, useState } from 'react';

// const SecondaryNavigation = () => {
//   const [showSecondaryNav, setShowSecondaryNav] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setShowSecondaryNav(true);
//       } else {
//         setShowSecondaryNav(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`text-white text-base  ${showSecondaryNav ? '' : 'hidden'} duration-300`}>
//     <nav className="fixed -left-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center bg-primary border-primary text-white py-1 -px-2">




//       <a href="#contact" className="text-accent1 hover:text-accent2 transform -rotate-90 my-10">
//         Contact
//       </a>
//       <a href="#projects" className="text-accent1 hover:text-accent2 transform -rotate-90 my-10">
//         Projects
//       </a>
//       <a href="#experience" className="text-accent1 hover:text-accent2 transform -rotate-90 my-10">
//         Experience
//       </a>
//       <a href="#skills" className="text-accent1 hover:text-accent2 transform -rotate-90 my-10">
//         Skills
//       </a>
//       <a href="#about" className="text-accent1 hover:text-accent2 transform -rotate-90 my-10">
//         About
//       </a>
//       <a href="#home" className="text-accent1 hover:text-accent2 transform my-1">
//         <img src="./images/home.svg" alt="" />
//       </a>
//     </nav>
//       </div>
//   );
// };

// export default SecondaryNavigation;






import React, { useEffect, useState } from 'react';

const SecondaryNavigation = () => {
  const [showSecondaryNav, setShowSecondaryNav] = useState(false);
  const [activeSection, setActiveSection] = useState('about'); // Set the initial active section to 'about'

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY;

      // Define the top offsets of your sections
      const aboutSectionOffset = document.getElementById('about').offsetTop;
      const skillsSectionOffset = document.getElementById('skills').offsetTop;
      const experienceSectionOffset = document.getElementById('experience').offsetTop;
      const projectsSectionOffset = document.getElementById('projects').offsetTop;
      const contactSectionOffset = document.getElementById('contact').offsetTop;

      // Determine the active section based on the scroll position
      if (scrollY >= contactSectionOffset - 200) {
        setActiveSection('contact');
        console.log('contact')
      } else if (scrollY >= projectsSectionOffset - 200) {
        setActiveSection('projects');
      } else if (scrollY >= experienceSectionOffset - 200) {
        setActiveSection('experience');
      } else if (scrollY >= skillsSectionOffset - 200) {
        setActiveSection('skills');
      } else {
        setActiveSection('about');
      }

      // Show or hide the secondary navigation based on your conditions
      if (scrollY > 100) {
        setShowSecondaryNav(true);
      } else {
        setShowSecondaryNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <div className={`text-white text-base ${showSecondaryNav ? '' : 'hidden'} duration-300`}>
      <nav className="fixed -left-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center bg-primary border-primary text-white py-1 -px-2">
      <a href="#contact" className={`text-lg text-accent1 hover:text-accent2 transform -rotate-90 my-10 ${activeSection === 'contact' ? 'text-white' : ''}`}>
          <span className={`underline-animation ${activeSection === 'contact' ? 'active' : ''}`}>Contact</span>
        </a>
        <a href="#projects" className={`text-lg text-accent1 hover:text-accent2 transform -rotate-90 my-10 ${activeSection === 'projects' ? 'text-white' : ''}`}>
          <span className={`underline-animation ${activeSection === 'projects' ? 'active' : ''}`}>Projects</span>
        </a>
        <a href="#experience" className={`text-lg text-accent1 hover:text-accent2 transform -rotate-90 my-10 ${activeSection === 'experience' ? 'text-white' : ''}`}>
          <span className={`underline-animation ${activeSection === 'experience' ? 'active' : ''}`}>Experience</span>
        </a>
        <a href="#skills" className={`text-lg text-accent1 hover:text-accent2 transform -rotate-90 my-10 ${activeSection === 'skills' ? 'text-white' : ''}`}>
          <span className={`underline-animation ${activeSection === 'skills' ? 'active' : ''}`}>Skills</span>
        </a>
        <a href="#about" className={`text-lg text-accent1 hover:text-accent2 transform -rotate-90 my-10 ${activeSection === 'about' ? 'text-white' : ''}`}>
          <span className={`underline-animation ${activeSection === 'about' ? 'active' : ''}`}>About</span>
        </a>
        <a href="#home" className="text-accent1 hover:text-accent2 transform my-1">
          <img src="./images/home.svg" alt="" />
        </a>
      </nav>
    </div>
  );
};

export default SecondaryNavigation;
