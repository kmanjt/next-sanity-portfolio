import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.img 
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1}}
        viewport={{ once: true }}
        src='/images/kevin.png'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]'
        />

        <div>
            <h1 className='text-4xl md:text-5xl font-semibold'>Hi, I'm Kevin.</h1>
            <p className='text-gray-500 mt-4 text-base'>I'm a Computer Science student at Dublin City University. I'm passionate about creating and designing things that make a difference.
            
            I love full stack development, building things and solving problems and I'm always looking for new challenges to tackle, especially with others.</p>
        </div>
    </motion.div>
  )
}

export default About