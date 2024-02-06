import React from 'react';
import { LinearGradient } from 'react-text-gradients';
import Heading from '../components/Heading';

function About() {
  return (
    <section className=" text-white py-8 md:py-16" id='about'>
      <div className="container mx-auto w-[90%] md:w-8/12">


        <Heading name={'ABOUT ME'} heading_desc={'A Glimpse Into My Journey'}/>




        <div className="responsive-iframe rounded-2xl">
          <iframe width="" height="" src="https://www.youtube.com/embed/4yYZKSw3t44?si=Y1eQJl2FoRIkKGDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='rounded-lg md:rounded-3xl w-full aspect-video'></iframe>
          </div>
      </div>
    </section>
  );
}

export default About;
