import React from 'react';
import { LinearGradient } from 'react-text-gradients'


function Hero() {

  return (
    <section className="hero  py-16 text-white">
      <div className="container mx-auto w-8/12">
        <div className="hero-content text-center">

          <div>
            <img src="./images/profile.png" alt="" className='w-40 h-40 object-cover rounded-full mb-8'/>
          </div>

          <p className="text-5xl font-bold w-[100%] leading-tight">
            <LinearGradient
              gradient={['to right', '#FF3753,#FF4EB0, #7F40FF, #2085FF']}
              className="text-6xl font-black"
            >
              Hi there! I'm Arjun, 
            </LinearGradient>
            a passionate <br /> Full Stack Web Developer.
          </p>
          <p className="text-lg mt-4 w-[90%]">
            I love building web applications that not only look great but also provide a seamless user experience.
            With a background in both front-end and back-end technologies, I'm excited to bring creative ideas to life.
          </p>
          <div className="mt-8">
            <a
              href="link-to-resume.pdf" // Replace with the actual link to your resume
              target="_blank"
              className="text-primary bg-transparent border border-primary rounded-full px-6 py-3 mx-2 hover:bg-primary hover:text-white transition duration-300"
            >
              Resume
            </a>
            <a
              href="#contact" // Replace with the actual link to your contact section
              className="bg-primary text-white rounded-full px-6 py-3 mx-2 hover:bg-accent1 transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;
