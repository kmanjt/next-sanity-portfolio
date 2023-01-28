import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5 }}
    viewport={{ once: true }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5a87c5]/80 scrollbar-thin'>
        {/* projects */}
        {projects.map((project, i) => (
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                <motion.img 
                initial={{ y: -300, opacity: 0 }}
                animate={{ y: 0, opacity: 1}}
                transition={{ duration: 2.0 }}
                viewport={{ once: true }}
                src="/images/kevin.png" alt="" className='w-[400px] h-[400px]'/>
                
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                        <span className='underline decoration-black'>Project {i + 1} of {projects.length}</span>
                    </h4>
                    <p className='text-lg text-center md:text-left'>This project is super coool and does a lot of things.</p>
                </div>
                </div>
        ))        
            }
        
        {/* projects */}
        {/* projects */}
    </div>

    <div className='w-full absolute top-[30%] bg-[#5a87c5]/20 left-0 h-[500px] skew-y-12'>

    </div>
    </motion.div>
  )
}

export default Projects