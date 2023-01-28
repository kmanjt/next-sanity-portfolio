import { motion } from 'framer-motion';
import React from 'react';

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#FAF9F6] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}

      src='https://upload.wikimedia.org/wikipedia/en/0/0e/Qad-inc-logo.png'
      className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' />
    <div className='px-0 md:px-10'>
      <h3 className='text-2xl font-bold'>Software Engineer Intern</h3>
      <h4 className='text-xl'>QAD Inc.</h4>
      <div className='flex space-x-2 my-2'>
        {/* tech used */}
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png' className='w-12 h-12 ' />
        {/* tech used */}
        <img src="skills\angular.png" className="w-12 h-12 " />
        {/* tech used */}
        <img src="skills\reactjs.png" className="w-12 h-12  object-contain" />
        {/* tech used */}
        <img src="skills\mysql.png" className="w-12 h-12  object-contain" />
        
      </div>
      <p>Started work... -Ended...</p>
      <ul className='list-disc space-y-4 ml-5 text-lg'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    </article>
  )
}

export default ExperienceCard