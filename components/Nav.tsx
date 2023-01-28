import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
    <motion.div 
    initial={{ x: -500, opacity: 0, scale: 0.5 }}
    animate={{ x: 0, opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-row items-center'>
    <a
              href="https://www.linkedin.com/in/kevin-james-tomescu-956b93229/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-3xl text-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300 hover:text-black">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/kmanjt"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-3xl text-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300 hover:text-black">
                <FaGithub />
              </div>
            </a>
            <a
              href="mailto:kevin.tomescu2@mail.dcu.ie"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-3xl text-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300 hover:text-black">
                <AiOutlineMail />
              </div>
            </a>
    </motion.div>
    
    </header>
  )
}

export default Header