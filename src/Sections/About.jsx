import React from 'react';
import { LinearGradient } from 'react-text-gradients';
import Heading from '../components/Heading';

function About() {
  return (
    <section className=" text-white py-16" id='about'>
      <div className="container mx-auto w-8/12">


        <Heading name={'ABOUT ME'}/>

        <p className="text-lg">
          Hi there! I'm Arjun, a passionate Full Stack Web Developer based in Hyderabad.
        </p>
        <p className="text-lg mt-4">
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
    </section>
  );
}

export default About;
