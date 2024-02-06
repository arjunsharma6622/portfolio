import React from 'react';
import Heading from '../components/Heading';
import { projectsData } from '../data';
import Slider from 'react-slick';



// function ProjectCard({ project }) {
//   return (
//     <div className="bg-secondary border border-neutral-700 rounded-xl shadow-lg p-6 ">

//       <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
//       <div className='h-60 mb-4'>
//         <img src={project.image} alt="" className='h-full w-full object-cover rounded-lg' />
//       </div>
//       <p className="text-gray-600 mb-4">{project.description}</p>
//       <div className="mb-4">
//         <ul className="text-gray-600 flex flex-wrap text-sm gap-1">
//           {project.techStack.map((tech, index) => (

//             <li key={index} className='border border-primary rounded-full px-3 py-[1.5px]' >{tech}</li>
//           ))}
//         </ul>
//       </div>
//       <div className="flex">
//         <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4 flex justify-start items-center">
//           <div className='flex justify-center gap-2 items-center'>
//             <img src="./images/Frame 1.svg" alt="" />
//             <span>Demo</span>
//           </div>

//         </a>

//         <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex justify-start items-center">
//           <div className='flex justify-center gap-2 items-center'>

//             <img src="./images/Frame 2.svg" alt="" />
//             <span>Code</span>
//           </div>

//         </a>
//       </div>
//     </div>
//   );
// }



function ProjectCard({ project }) {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <div className="bg-secondary border border-neutral-700 rounded-xl shadow-lg p-4 md:p-6 ">
      <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
      <div className='h-auto mb-4'>
        <Slider {...settings}>
          {project.images.map((image, index) => (
            <img src={`./images/projects/${project.dir_name}/${image}.png`} alt={`project-${index}`} className='h-full w-full object-contain rounded-lg' key={index} />
          ))}
        </Slider>
      </div>
      <p className="text-gray-600 text-sm md:text-base mb-4">{project.description}</p>
      <div className="mb-4">
        <ul className="text-gray-600 flex flex-wrap text-sm gap-1">
          {project.techStack.map((tech, index) => (
            <li key={index} className='border border-primary rounded-full px-3 py-[1.5px]' >{tech}</li>
          ))}
        </ul>
      </div>
      <div className="flex">
        {project.demoLink && (
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4 flex justify-start items-center">
            <div className='flex justify-center gap-2 items-center'>
              <img src="./images/Frame 1.svg" alt="" />
              <span>Demo</span>
            </div>
          </a>
        )}

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
  return (
    <section className=" text-white py-8 md:py-16 relative " id='projects'>

      <div className="container mx-auto w-[90%] md:w-8/12">

        <Heading name={'PROJECTS'} heading_desc={'A Portfolio of Projects'} />

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