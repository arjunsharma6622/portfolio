import React from 'react';
import TimeLine from '../components/TimeLine';
import Heading from '../components/Heading';
import { experienceData } from '../data';


function Experience() {
  return (
    <section className=" text-white py-8 md:py-16" id='experience'>
      <div className="container mx-auto w-[90%] md:w-8/12">
        <Heading name={'EXPERIENCE'} heading_desc={'My Professional Voyage'}/>

        <ol className="relative md:pl-8 flex flex-col gap-6">
          {experienceData.map((experience, index) => (
            <TimeLine
              key={index}
              heading={experience.title}
              date={experience.date}
              description={experience.description}
              icon={experience.icon}
              images={experience.images}
              company={experience.company}
              client={experience.client}
              techStack={experience.techStack}
              gitHub={experience.gitHub}
              demo={experience.demo}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;