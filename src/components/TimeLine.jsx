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




import React from 'react';

function Timeline({ heading, date, description, icon }) {
  return (
    <li className="mb-6 sm:mb-8 md:mb-10 ml-6 ">
      <div className="absolute h-full w-1  left-0 top-12 grlineV"/>
      <span className="absolute flex items-center justify-center w-14 h-14 rounded-full -left-6">
        <img src={icon} alt="" className='rounded-full relative' />
        <div className="-z-10 w-6 h-6 absolute bg-white bg-opacity-90 rounded-full blur-lg" />
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white sm:text-xl md:text-2xl lg:text-3xl">
        {heading}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {date}
      </time>
      <p className="mb-2 sm:mb-3 md:mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </li>
  );
}

export default Timeline;
