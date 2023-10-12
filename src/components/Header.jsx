import React from 'react';

function Header() {
  return (
    <header className="bg-primary text-white px-16 py-8 relative">
              <div className="w-96 h-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className=" w-96 h-56 absolute bg-blue-600 bg-opacity-50 rounded-full blur-3xl" />
          <div className=" w-96 h-56 left-64 absolute bg-blue-600 bg-opacity-50 rounded-full blur-3xl" />
          <div className=" w-96 h-56 right-64 absolute bg-blue-600 bg-opacity-50 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto flex justify-between items-center w-8/12 px-4 py-4 rounded-xl" style={{ background: 'rgba(26, 26, 26, 0.483)', backdropFilter: 'blur(0.4px)' }}>
        <div>
          <h1 className="text-2xl font-bold">🙂 Arjun Sharma</h1>
        </div>
        <nav className="space-x-4">
          <a href="#about" className="text-accent1 hover:text-accent2 transition duration-300">About</a>
          <a href="#education" className="text-accent1 hover:text-accent2 transition duration-300">Education</a>
          <a href="#experience" className="text-accent1 hover:text-accent2 transition duration-300">Experience</a>
          <a href="#projects" className="text-accent1 hover:text-accent2 transition duration-300">Projects</a>
          <a href="#contact" className="text-accent1 hover:text-accent2 transition duration-300">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
