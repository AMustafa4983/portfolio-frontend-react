import React from 'react'
import { Progress } from 'flowbite-react';

import tensorflow from '../../assets/images/tensorflow.svg'
import pytorch from '../../assets/images/pytorch.svg'
import python from '../../assets/images/python.svg'
import django from '../../assets/images/django.svg'
import reLogo from '../../assets/images/reactjs-icon.svg'
import java from '../../assets/images/java.svg'
import pandas from '../../assets/images/pandas.svg'
import numpy from '../../assets/images/numpy.svg'

import { motion } from 'framer-motion';


const Skills = () => {
  const hoverScale =1.2;
  const tabScale = .8;
  return (
    <>
    <div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-px my-12 bg-gray-200 border-0 dark:bg-gray-700"/>
    <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">Skills</span>
    </div>

    <div className='grid grid-cols-2 grid-row-1 grid-flow-col gap-2'>

      
      <div className='col-span-1 row-span-1 h-200 w-200 p-10 px-24 py-24 inset-0 text-center'>
      <div className="font-rubik w-[500px] flex flex-col gap-2">
        <div className="px-4 text-left text-xl text-yellow-100">
          AI & Machine Learning Skills
        </div>
        <Progress
          color="yellow"
          progress={90}
          size="sm"
        />

        <br/>
        
        <div className="px-4 text-left text-xl text-cyan-100">
          Data Analysis & Soft Skills
        </div>
        <Progress
          color="blue"
          progress={100}
          size="sm"
        />
        
        <br/>
        
        <div className="px-4 text-left text-xl text-red-100">
          Web Design & Development Skills
        </div>
        <Progress
          color="red"
          progress={70}
          size="sm"
        />

      </div>
      </div>

      <div className='font-rubik col-span-2 row-span-1 h-200 w-200 p-10 px-24 py-24 inset-0 text-left text-white'>
        <h1 className='text-3xl pb-4'>Framworks & Languages</h1>

          <div className='grid grid-cols-4 gap-2'>
          <motion.div
          whileHover={{
            scale: hoverScale,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          whileTap={{ scale: tabScale }}
          >
            <div className='text-center w-[50px] h-[50px]'>
              <img src={tensorflow} alt='tensorflow'></img>
            </div>
          </motion.div>

          <motion.div
          whileHover={{
            scale: hoverScale,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          whileTap={{ scale: tabScale }}
          >
          <div className='text-center w-[50px] h-[50px]'>
            <img src={pytorch} alt='pytorch'></img>
          </div>
          </motion.div>

          <motion.div
          whileHover={{
            scale: hoverScale,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          whileTap={{ scale: tabScale }}
          >
          <div className='text-center w-[50px] h-[50px]'>
            <img src={python} alt='python'></img>
          </div>
          </motion.div>

          <motion.div
          whileHover={{
            scale: hoverScale,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          whileTap={{ scale: tabScale }}
          >
          <div className='text-center w-[50px] h-[50px]'>
            <img src={java} alt='java'></img>
          </div>
          </motion.div>


          <motion.div
          whileHover={{
            scale: hoverScale,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          whileTap={{ scale: tabScale }}
          >
          <div className='text-center w-[50px] h-[50px]'>
            <img src={reLogo} alt='react'></img>
          </div>
          </motion.div>

          <motion.div
          whileHover={{
            scale: hoverScale,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          whileTap={{ scale: tabScale }}
          >
          <div className='text-center w-[50px] h-[50px]'>
            <img src={django} alt='django'></img>
          </div>
          </motion.div>

          <motion.div
          whileHover={{
            scale: hoverScale,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          whileTap={{ scale: tabScale }}
          >
          <div className='text-center w-[50px] h-[50px]'>
            <img src={pandas} alt='pandas'></img>
          </div>
          </motion.div>

          <motion.div
          whileHover={{
            scale: hoverScale,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }}
          whileTap={{ scale: tabScale }}
          >
          <div className='text-center w-[50px] h-[50px]'>
            <img src={numpy} alt='numpy'></img>
          </div>
          </motion.div>


        </div>
      </div>
    </div>
    </>
  )
}

export default Skills;