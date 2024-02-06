import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { LinearGradient } from 'react-text-gradients'
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { LuMessagesSquare } from "react-icons/lu";




function Hero() {

  return (
    <section className=" hero py-8 md:py-16 text-white">
      <div className="container mx-auto w-[90%] md:w-8/12">
        <div className="hero-content text-center w-full">

          <div>
            <img src="./images/profile.png" alt="" className='w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mb-8'/>
          </div>

          <p className="text-2xl md:text-5xl font-bold w-[100%] md:leading-snug leading-snug">
            <LinearGradient
              gradient={['to right', '#FF3753,#FF4EB0, #7F40FF, #2085FF']}
              className="text-3xl md:text-6xl font-black"
            >
              Hi there! I'm Arjun, 
            </LinearGradient>
            a passionate Full Stack Web Developer.
          </p>
          <p className="text-base md:text-lg mt-4 md:w-[90%]">
            I love building web applications that not only look great but also provide a seamless user experience.
            With a background in both front-end and back-end technologies, I'm excited to bring creative ideas to life.
          </p>
          <div className="flex justify-center md:flex-row w-full flex-col gap-3 mt-8">
            <a
              href="resume.pdf" // Replace with the actual link to your resume
              target="_blank"
              className="text-primary bg-transparent border border-primary rounded-full px-4 py-2 md:px-6 md:py-3 mx-2 hover:bg-primary hover:text-white transition duration-300 flex gap-2 items-center justify-center"
            >
              <HiOutlineClipboardDocumentList className="inline-block w-6 h-6" />
              Resume
            </a>
            <a
              href="#contact" // Replace with the actual link to your contact section
              className="border-primary border text-white rounded-full px-4 py-2 md:px-6 md:py-3 mx-2 hover:bg-accent1 transition duration-300 flex gap-2 items-center justify-center"
            >
              <LuMessagesSquare className="inline-block w-6 h-6" />
              Get in Touch
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;
