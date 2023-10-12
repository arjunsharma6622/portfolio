import React from 'react';
import { LinearGradient } from 'react-text-gradients';
import Heading from '../components/Heading';

function About() {
  return (
    <section className=" text-white py-16" id='about'>
      <div className="container mx-auto w-8/12">


        <Heading name={'ABOUT ME'}/>




        <div className="responsive-iframe">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/4yYZKSw3t44?si=Y1eQJl2FoRIkKGDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
      </div>
    </section>
  );
}

export default About;
