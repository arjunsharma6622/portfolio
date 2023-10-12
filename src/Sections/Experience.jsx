import React from 'react';
import TimeLine from '../components/TimeLine';
import Heading from '../components/Heading';
import { experienceData } from '../data';


function Experience() {
  return (
    <section className=" text-white py-16" id='experience'>
      <div className="container mx-auto w-8/12">
        <Heading name={'EXPERIENCE'} heading_desc={'My Professional Voyage'}/>

        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {experienceData.map((experience, index) => (
            <TimeLine
              key={index}
              heading={experience.title}
              date={experience.date}
              description={experience.description}
              icon={experience.icon}

            />
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;