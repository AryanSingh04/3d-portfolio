import React from 'react'
import Fox from '../model/Fox'
import { Canvas } from '@react-three/fiber'

const Contact = () => {
  return (
    <div  className='w-full bg-green-400 h-screen flex items-center'>
      <div className='w-full md:w-1/2 bg-yellow-300 h-full'>55</div>
      <div className='w-1/2 bg-pink-400 h-full hidden md:block'>
      <Canvas className=' '>
      <Fox/>
      </Canvas>
      
      </div>
    </div>
  )
}

export default Contact