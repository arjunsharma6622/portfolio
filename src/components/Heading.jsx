import React from 'react'
import { LinearGradient } from 'react-text-gradients'


const Heading = ({name, heading_desc}) => {
  return (
    <div className='mb-6'> 
    <div className='text-center flex justify-items-start items-center gap-3'>
    <img src="./images/folder.svg" alt="" className='h-8 w-8'/>            
    <LinearGradient
      gradient={['to left', '#101010, #909090']}
      className="text-6xl font-black"
    >
      /{name}
    </LinearGradient>
    </div>
    <span className='flex items-center text-base text-[#6e6e6e]'>
    {heading_desc}
    {/* <div className='ml-4 w-40 h-1 grline'></div> */}
    </span>
    </div>
  )
}

export default Heading