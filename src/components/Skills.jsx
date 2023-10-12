import React from 'react';
import { LinearGradient } from 'react-text-gradients'


const skillsData = [
  { name: 'JavaScript', imageSrc: './images/Icons/js.svg', tag: 'Web' },
  { name: 'Python', imageSrc: './images/Icons/python.svg', tag: 'Web' },
  { name: 'C++', imageSrc: './images/Icons/c++.svg', tag: 'Web' },
  { name: 'HTML', imageSrc: './images/Icons/html5.svg', tag: 'Web' },
  { name: 'CSS', imageSrc: './images/Icons/css.svg', tag: 'Web' },

  { name: 'React', imageSrc: './images/Icons/reactjs.svg', tag: 'Web' },
  { name: 'Redux', imageSrc: './images/Icons/redux.svg', tag: 'Web' },
  { name: 'Tailwind', imageSrc: './images/Icons/tailwind.svg', tag: 'Web' },
  { name: 'SASS', imageSrc: './images/Icons/sass.svg', tag: 'Web' },
  { name: 'Bootstrap', imageSrc: './images/Icons/bootstrap5.svg', tag: 'Web' },
  { name: 'Material UI', imageSrc: './images/Icons/material-ui.svg', tag: 'Web' },
  { name: 'Figma', imageSrc: './images/Icons/figma.svg', tag: 'Web' },
  { name: 'Canva', imageSrc: './images/Icons/canva.svg', tag: 'Web' },

  { name: 'NodeJs', imageSrc: './images/Icons/nodejs.svg', tag: 'Web' },
  { name: 'MongoDb', imageSrc: './images/Icons/mongodb.svg', tag: 'Web' },
  { name: 'Postman', imageSrc: './images/Icons/postman.svg', tag: 'Web' },
  { name: 'Firebase', imageSrc: './images/Icons/firebase.svg', tag: 'Web' },
  { name: 'npm', imageSrc: './images/Icons/npm.svg', tag: 'Web' },
  { name: 'json', imageSrc: './images/Icons/json.svg', tag: 'Web' },
  { name: 'VS Code', imageSrc: './images/Icons/vs.svg', tag: 'Web' },
  { name: 'Git', imageSrc: './images/Icons/git.svg', tag: 'Web' },
  { name: 'GitHub', imageSrc: './images/Icons/github.svg', tag: 'Web' },
  { name: 'OpenAI', imageSrc: './images/Icons/openai.svg', tag: 'Web' },
];



function SkillCard({ skill }) {
  return (
    <div
      className="flex px-4 py-1 bg-neutral-900 rounded-lg border border-neutral-700 flex-row justify-start items-center"
    >
      <div className="justify-center items-center rounded-xl ">
        <img
          className="h-16 w-16 items-center justify-center"
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
    <section className="bg-primary text-white py-16 relative">

      {/* <div className="-z-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/3 bg-blue-800 bg-opacity-30 rounded-full blur-3xl" /> */}





      <div className="container mx-auto w-8/12">
        {/* <h2 className="text-6xl font-bold mb-6 text-center bg-gradient-skill bg-clip-text text-transparent tracking-wider">
          Skills
        </h2> */}

<div className='text-center mb-6 flex justify-items-start items-center gap-3'>
        <img src="./images/folder.svg" alt="" className='h-8 w-8'/>
        <LinearGradient gradient={['to left', '#101010 ,#808080']} className="text-6xl font-black text-center">
          /SKILLS
        </LinearGradient>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />

          ))}

        </div>



      </div>




    </section >
  );
}

export default Skills;
