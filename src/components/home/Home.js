import React from 'react'
import myphoto from '../../assets/images/MyPhoto.png'
import Intro from './Intro'
import Skills from './Skills'
import Contact from './Contact'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TextPopUp from '../../animations/TextPopUp'
import '../../styles/home.css'

const Home = () => {
  const sentence = "Hi, I'm Abdelrahman".split("");
  
  return (
    <>
    <div className='banner font-rubik text-white'>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>

        <div className='h-128 p-10 py-24 text-center'>
          <p className='pt-32 text-5xl'>
          { sentence.map((char, index) =>{
            return(
            <TextPopUp key={index}>{char}</TextPopUp>
            )  
          })}
          </p>
          <p className='text-lg px-10 pt-4 text-left'>
          🚀 I'm AI Researcher & Software Engineer.
          </p>
          <p className='text-lg px-10 text-left'>
          🌌Passionate about elegant solutions to complex problems.
          </p>
          <p className='text-lg px-10 text-left'>
          💡Let's explore possibilities!
          </p>
          <Link to='/download-cv'>
            <button class="inline-flex items-center justify-center p-0.5 mt-6 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-red-500 group-hover:from-purple-500 group-hover:to-red-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Donwload My Resume
              </span>
            </button>
          </Link>
        </div>
 
        <div className='text-center md:text-left'>
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <div className='rounded-lg border-white border-4 border-line m-10 md:m-20'>
              <img src={myphoto} alt='Me' />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    <Intro />
    <Skills />
    <Contact />
    </>
  )
}

export default Home;

