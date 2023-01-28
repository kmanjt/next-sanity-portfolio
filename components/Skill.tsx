import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean
}

function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{ opacity: 0, x: directionLeft ? -200 : 200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        src='/skills/reactjs.png'
        className='rounded-full border h-24 w-24 object-cover border-gray-500 xl:w-32 xl:h-32 filter  group-hover:grayscale transition duration-300'

/>
<div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#FAF9F6] h-24 w-24 xl:h-32 xl:w-32 rounded-full z-0'>
    <div className='flex items-center justify-center h-full'>
        <p className='text-3xl font-bold text-black opacity-100'> ReactJs</p>
    </div>
</div>
    </div>
    
  )
}

export default Skill