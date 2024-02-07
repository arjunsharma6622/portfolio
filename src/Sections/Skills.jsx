import React from 'react';
import Heading from '../components/Heading';
import { skillsData } from '../data';

function SkillCard({ skill }) {
  return (
    <div
      className="flex md:px-4 px-2 md:py-1 bg-neutral-900 rounded-lg border border-neutral-700 flex-row justify-start items-center"
    >
      <div className="justify-center items-center rounded-xl ">
        <img
          className="md:h-16 md:w-16 h-12 w-12 items-center justify-center"
          src={`${skill.imageSrc}`} // Use the actual path to the skill image
          alt={skill.name}
          width={'100%'}
          height={'100%'}
        />
      </div>

      <div className="justify-between items-center inline-flex flex-col">
        <div className=" basis-0 h-6 text-white text-l font-medium">{skill.name}</div>
        {/* <div className="px-2 py-1 bg-neutral-900 rounded-3xl border border-neutral-800 justify-center items-center gap-2.5 flex">
          <div className="text-zinc-500 text-xs">{skill.tag}</div>
        </div> */}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className=" text-white py-8 md:py-16 relative" id='skills'>
      <div className="container mx-auto w-[90%] md:w-8/12">
        <Heading name={'SKILLS'} heading_desc={'Skills That Define Me'}/>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-2">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section >
  );
}

export default Skills;