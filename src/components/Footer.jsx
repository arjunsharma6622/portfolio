import React from 'react';

function Footer() {
  return (
    <footer className="relative bg-primary text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="absolute w-1/4 h-20 bg-gray-600 bg-opacity-60 rounded-full blur-3xl" />

        <div className="z-10 flex space-x-4 mb-4">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent1 transition duration-300"
          >
            <img src="./images/Icons/Social/github.svg" alt="GitHub" className="h-8 w-8" />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent1 transition duration-300"
          >
            <img src="./images/Icons/Social/Linkedin.svg" alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a
            href="https://medium.com/@your-medium"
            target=" _blank"
            rel="noopener noreferrer"
            className="hover:text-accent1 transition duration-300"
          >
            <img src="./images/Icons/Social/Medium.svg" alt="Medium" className="h-8 w-8" />
          </a>
          <a
            href="https://leetcode.com/your-leetcode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent1 transition duration-300"
          >
            <img src="./images/Icons/Social/Youtube.svg" alt="LeetCode" className="h-8 w-8" />
          </a>
        </div>
        <p className="text-sm">Connect with me on social media</p>
      </div>
    </footer>
  );
}

export default Footer;
