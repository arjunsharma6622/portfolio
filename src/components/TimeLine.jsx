import React from 'react';

function Timeline({ heading, date, description, icon }) {
  return (
    <li className="mb-6 sm:mb-8 md:mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900">
        {icon}
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
