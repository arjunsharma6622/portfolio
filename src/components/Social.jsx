import React from 'react';


const SocialMedia = () => {
  return (
    <div className="fixed -right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-8 bg-secondary border border-primary rounded-xl px-3 py-4">

      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:text-accent2 transition duration-300">
        <img src="/images/Icons/Social/Linkedin.svg" alt="" className='h-8 w-8'/>
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:text-accent2 transition duration-300">
        <img src="./images/Icons/Social/github.svg" alt="" className='h-8 w-8'/>
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:text-accent2 transition duration-300">
        <img src="./images/Icons/Social/Youtube.svg" alt="" className='h-8 w-8'/>
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:text-accent2 transition duration-300">
        <img src="./images/Icons/Social/Medium.svg" alt="" className='h-8 w-8'/>
      </a>
    </div>
  );
}

export default SocialMedia;
