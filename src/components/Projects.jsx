import React from 'react';
import { LinearGradient } from 'react-text-gradients'


const projectsData = [
  {
    title: 'Netflix Clone',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/yourusername/project1',
    image: 'https://t-mobile.scene7.com/is/image/Tmusprod/netflix-hero_desktop:HERO-desktop?fmt=png&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0'
  },
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project 2',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    techStack: ['React', 'Redux', 'Firebase'],
    demoLink: 'https://example.com/demo2',
    codeLink: 'https://github.com/yourusername/project2',
  },
  {
    title: 'Project 2',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    techStack: ['React', 'Redux', 'Firebase'],
    demoLink: 'https://example.com/demo2',
    codeLink: 'https://github.com/yourusername/project2',
  },
  // Add more projects here
];

function ProjectCard({ project }) {
  return (
    <div className="bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg p-6 ">

      <h3 className="text-2xl font-semibold">{project.title}</h3>
      <div>
        <img src={project.image} alt="" />
      </div>
      <p className="text-gray-600 mt-2">{project.description}</p>
      <div className="mt-4">
        <p className="text-gray-800 font-semibold">Tech Stack:</p>
        <ul className="text-gray-600 flex flex-wrap text-sm gap-1">
          {project.techStack.map((tech, index) => (
            
            <li key={index}className='border border-primary rounded-full px-3 py-1' >{tech}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex">
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4 flex justify-start items-center">
          <div className='flex justify-center gap-2 items-center'>
          <img src="../Images/Frame 1.svg" alt="" />
          <span>Demo</span>
          </div>
          
        </a>

        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex justify-start items-center">
        <div className='flex justify-center gap-2 items-center'>

        <img src="../Images/Frame 2.svg" alt="" />
          <span>Code</span>
          </div>
          
        </a>
      </div>
    </div>
  );
}

function Projects() {

  const silverGradient = {
    background: 'linear-gradient(90deg, #c0c0c0 0%, #808080 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };


  return (
    <section className="bg-primary text-white py-16 relative ">

      <div className="container mx-auto w-8/12">
        {/* <h2 className="text-5xl tracking-wider  font-bold mb-6 text-center bg-gradient-silver bg-clip-text text-transparent py-2">PROJECTS</h2> */}
        {/* <GradientText text="Skills" style={silverGradient} /> */}
        
        <div className='text-center mb-6 flex justify-items-start items-center gap-3'>
        <img src="./../Images/folder.svg" alt="" className='h-8 w-8'/>

        <LinearGradient gradient={['to left', '#101010 ,#808080']} className="text-6xl font-black text-center">
          /PROJECTS
        </LinearGradient>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
