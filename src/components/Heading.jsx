import React from 'react'
import { LinearGradient } from 'react-text-gradients'


const Heading = ({name}) => {
  return (
    <div className='text-center mb-6 flex justify-items-start items-center gap-3'>
    <img src="./images/folder.svg" alt="" className='h-8 w-8'/>            
    <LinearGradient
      gradient={['to left', '#101010, #808080']}
      className="text-6xl font-black"
    >
      /{name}
    </LinearGradient>
    </div>
  )
}

export default Heading