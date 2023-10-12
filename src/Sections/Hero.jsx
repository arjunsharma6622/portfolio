import React from 'react';
import { LinearGradient } from 'react-text-gradients';

function Hero() {
  const textGradient = {
    gradient: ['to right', '#ff6699', '#ff3366'],
  };

  return (
    <section className="hero  py-16 text-white">
      <div className="container mx-auto">
        <div className="hero-content text-center">

          <div className="hero-text">
            <h1 className="text-5xl font-bold mb-4">
              <LinearGradient {...textGradient}>Welcome to &lt;projects&gt;</LinearGradient>
            </h1>
            <p className="text-lg mb-6">
              A place where creativity meets code.
            </p>
            <a
              href="#projects"
              className="bg-accent1 hover:bg-accent2 text-primary hover:text-white py-2 px-4 rounded-full text-lg font-medium transition duration-300"
            >
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
