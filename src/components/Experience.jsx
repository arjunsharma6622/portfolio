import React from 'react';
import TimeLine from './TimeLine';
import { LinearGradient } from 'react-text-gradients'


const experienceData = [
  {
    title: 'Web Development Intern',
    company: 'Aresuno',
    date: 'May 2023 – Jul 2023',
    description: 'Developed the frontend of a sanitary ecommerce website using HTML, CSS, Bootstrap, and JavaScript. Collaborated with the team to enhance user experience and implement interactive features.',
  },
  {
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    date: 'May 2023 – Present',
    description: 'Engineered a real-time exercise form evaluation app employing WebRTC, Socket.IO, and OpenCV technologies. It provided instant feedback and guidance for users\' workout techniques, enhancing safety and effectiveness.',
  },
  // Add more work experiences here
];

function Experience() {
  return (
    <section className="bg-primary text-white py-16" id='experience'>
      <div className="container mx-auto w-8/12">

        {/* <h2 className="text-4xl font-bold mb-6 text-center">Experience</h2> */}
        <div className='text-center mb-6 flex justify-items-start items-center gap-3'>
        <img src="./images/folder.svg" alt="" className='h-8 w-8'/>
          <LinearGradient gradient={['to left', '#101010 ,#808080']} className="text-6xl font-black text-center">
            <span>
              /EXPERIENCE
              {/* <div style={{ background: 'linear-gradient(90deg, #808080 0%, #101010 100%)' }} className='h-1 w-1/2'></div> */}
            </span>
          </LinearGradient>
        </div>



        {/* <div className='text-center mb-6 flex items-center justify-center'>
          <LinearGradient gradient={['to left', '#101010 ,#808080']} className="text-6xl tracking-wider font-bold mb-6 text-center flex items-center">
          <div style={{ background: 'linear-gradient(90deg, #101010 0%, #808080 100%)' }} className='inline-block h-1 w-20'></div>

            <span>
              EXPERIENCE
            </span>
            <div style={{ background: 'linear-gradient(90deg, #808080 0%, #101010 100%)' }} className='inline-block h-1 w-20'></div>

          </LinearGradient>
        </div> */}







        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {experienceData.map((experience, index) => (
            <TimeLine
              key={index}
              heading={experience.title}
              date={experience.date}
              description={experience.description}

            />
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
