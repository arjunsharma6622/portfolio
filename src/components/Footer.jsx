import React from 'react';
import { socialLinks } from '../data';

function Footer() {
  return (
    <footer className="relative text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="absolute w-1/4 h-20 bg-gray-600 bg-opacity-60 rounded-full blur-3xl" />

        <div className="z-10 flex space-x-4 mb-4">
          {socialLinks.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent1 transition duration-300"
              key={index}
            >
              <img src={social.icon} alt="GitHub" className="h-9 w-9" />
            </a>
          ))}


        </div>
        <p className="text-sm">Connect with me on social media</p>
      </div>
    </footer>
  );
}

export default Footer;
