import React from 'react';
import { LinearGradient } from 'react-text-gradients'


const projectsData = [
  {
    title: 'Netflix Clone',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/yourusername/project1',
    image: 'https://miro.medium.com/v2/resize:fit:2000/1*hLrWUW2mKy-GTeujcXl0NA.png'
  },
  {
    title: 'Serivce listing website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwindcss'],
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/yourusername/project1',
    image: 'https://9to5mac.com/wp-content/uploads/sites/6/2019/07/twitter-desktop-dark-mode-new-design.jpeg?quality=82&strip=all'
  },
  {
    title: 'Ecommerce Website',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    techStack: ['React', 'Redux', 'Firebase'],
    demoLink: 'https://example.com/demo2',
    codeLink: 'https://github.com/yourusername/project2',
    image:'https://websitesetup.org/wp-content/uploads/2023/02/WooCommerce-ecommerce-platform-February-2023.jpg'
  },
  {
    title: 'Facebook Clone',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    techStack: ['React', 'Redux', 'Firebase'],
    demoLink: 'https://example.com/demo2',
    codeLink: 'https://github.com/yourusername/project2',
    image:'https://engineering.fb.com/wp-content/uploads/2020/05/2.-Home-Setting-Dark-Mode.png'
  },
  {
    title: 'Form Fix',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    techStack: ['React', 'Redux', 'Firebase'],
    demoLink: 'https://example.com/demo2',
    codeLink: 'https://github.com/yourusername/project2',
    image:'https://engineering.fb.com/wp-content/uploads/2020/05/2.-Home-Setting-Dark-Mode.png'
  },
];

function ProjectCard({ project }) {
  return (
    <div className="bg-secondary border border-neutral-700 rounded-xl shadow-lg p-6 ">

      <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
      <div className='h-60 mb-4'>
        <img src={project.image} alt="" className='h-full w-full object-cover rounded-lg'/>
      </div>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="mb-4">
        <ul className="text-gray-600 flex flex-wrap text-sm gap-1">
          {project.techStack.map((tech, index) => (
            
            <li key={index}className='border border-primary rounded-full px-3 py-[1.5px]' >{tech}</li>
          ))}
        </ul>
      </div>
      <div className="flex">
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4 flex justify-start items-center">
          <div className='flex justify-center gap-2 items-center'>
          <img src="./images/Frame 1.svg" alt="" />
          <span>Demo</span>
          </div>
          
        </a>

        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex justify-start items-center">
        <div className='flex justify-center gap-2 items-center'>

        <img src="./images/Frame 2.svg" alt="" />
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
    <section className="bg-primary text-white py-16 relative " id='projects'>

      <div className="container mx-auto w-8/12">
        {/* <h2 className="text-5xl tracking-wider  font-bold mb-6 text-center bg-gradient-silver bg-clip-text text-transparent py-2">PROJECTS</h2> */}
        {/* <GradientText text="Skills" style={silverGradient} /> */}
        
        <div className='text-center flex justify-items-start items-center gap-3'>
        <img src="./images/folder.svg" alt="" className='h-8 w-8'/>

        <LinearGradient gradient={['to left', '#101010 ,#808080']} className="text-6xl font-black text-center">
          /PROJECTS
        </LinearGradient>
        
        </div>
        <p className='mb-6'>Take a look at my projects</p>



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
