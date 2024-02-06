// import React from 'react';


// const SocialMedia = () => {


//   return (
//     <div className="fixed -right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-8 bg-secondary border border-primary rounded-xl px-3 py-4">

//       <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:text-accent2 transition duration-300">
//         <img src="/images/Icons/Social/Linkedin.svg" alt="" className='h-8 w-8'/>
//       </a>
//       <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:text-accent2 transition duration-300">
//         <img src="./images/Icons/Social/github.svg" alt="" className='h-8 w-8'/>
//       </a>
//       <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:text-accent2 transition duration-300">
//         <img src="./images/Icons/Social/Youtube.svg" alt="" className='h-8 w-8'/>
//       </a>
//       <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:text-accent2 transition duration-300">
//         <img src="./images/Icons/Social/Medium.svg" alt="" className='h-8 w-8'/>
//       </a>
//     </div>
//   );
// }

// export default SocialMedia;







import React, { useEffect, useState } from 'react';
import { socialLinks } from '../data';

const SocialMedia = () => {
  const [showSocialMedia, setShowSocialMedia] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY;

      // Define the offset when the footer starts (you'll need to calculate or adjust this value)
      const yourFooterTopOffset = document.getElementById('contact').offsetTop;

      // Determine when to hide the social media component (adjust the value as needed)
      if (scrollY >= yourFooterTopOffset - 200) {
        setShowSocialMedia(false);
      } else {
        setShowSocialMedia(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return showSocialMedia ? (
    <div className="fixed md:flex hidden right-4 top-1/2 transform -translate-y-1/2 flex-col items-center gap-6 bg-secondary border border-primary rounded-2xl px-3 py-6">
      {socialLinks.map((social, index) => (
        <a href={social.link} target="_blank" rel="noopener noreferrer" className="text-accent1 hover:text-accent2 transition duration-300" key={index}>
          <img src={social.icon} alt="" className='h-9 w-9' />
        </a>
      ))}

    </div>
  ) : null;
}

export default SocialMedia;
