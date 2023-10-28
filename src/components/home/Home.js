import React from 'react'
import myphoto from '../../assets/images/MyPhoto.png'
import Intro from './Intro'
import Skills from './Skills'
import Contact from './Contact'
import CV from '../data/CV'
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
          <CV/>
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

