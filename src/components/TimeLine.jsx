// import React from 'react';

// function Timeline({ heading, date, description, icon }) {
//   return (
//     <li className="mb-6 sm:mb-8 md:mb-10 ml-6">
//       <span className="absolute flex items-center justify-center w-12 h-12 rounded-full -left-6  border-gray">
//         <img src={icon} alt="" className='rounded-full relative'/>
//         <div className="-z-10 w-8 h-8 absolute bg-white bg-opacity-60 rounded-full blur-xl" />

//       </span>
//       <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white sm:text-xl md:text-2xl lg:text-3xl">
//         {heading}
//       </h3>
//       <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//         {date}
//       </time>
//       <p className="mb-2 sm:mb-3 md:mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
//         {description}
//       </p>
//     </li>
//   );
// }

// export default Timeline;




import React, { useState } from 'react';
import { PhotoView } from 'react-photo-view';
import Images from './Images';

function Timeline({ heading, date, description, icon, images, company, client, techStack }) {
  const [openImages, setOpenImages] = useState(false);
  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <li className="mb-6 sm:mb-8 md:mb-10 ml-6 ">
      <div className="absolute h-full w-1  left-0 top-12 grlineV"/>
      <span className="absolute flex items-center justify-center w-14 h-14 rounded-full -left-6">
        <img src={icon} alt="" className='rounded-full relative' />
        <div className="-z-10 w-6 h-6 absolute bg-white bg-opacity-90 rounded-full blur-lg" />
      </span>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col'>
      <h3 className="flex items-end text-lg font-semibold text-gray-900 dark:text-white sm:text-xl md:text-2xl lg:text-3xl">
        {heading},       <h2 className='text-xl'>{company}</h2>

      </h3>
      
      <h2 className='text-lg'>{client}</h2>

      </div>
      <time className="block mb-2 text-base font-normal leading-none text-gray-400 dark:text-gray-500">
        {date}
      </time>
      </div>
      <div className="mb-4">
        <ul className="text-gray-600 flex flex-wrap text-sm gap-2">
          {techStack.map((tech, index) => (
            <li key={index} className='border border-primary rounded-full px-3 py-[2px]' >{tech}</li>
          ))}
        </ul>
      </div>
      <div className='pl-4'>
      <ul className="mb-2 list-disc sm:mb-3 md:mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {images.slice(0, 5).map((image, index) => (
          <div className=''>
            <img loading='lazy' src={image.replace('/upload', '/upload/c_scale,h_800')} alt="" onClick={() => {
              setOpenImages(true)
              setCurrentImage(image)
            }} className='w-full cursor-pointer object-cover rounded-lg'/>
          {openImages && (
          <Images images={images} currentImage={currentImage} setOpenImages={setOpenImages} onClose={() => setOpenImages(false)}/>
        )}
          </div>

        ))}
        <div className='bg-white cursor-pointer rounded-lg opacity-90 flex items-center justify-center' onClick={() => {
          setOpenImages(true)
          setCurrentImage(images[5])
        }}>
          <p className='text-center text-4xl text-black'>+{images.length - 5}</p>
        </div>



      </div>
    </li>
  );
}

export default Timeline;
