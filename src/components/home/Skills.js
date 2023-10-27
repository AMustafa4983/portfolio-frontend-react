import React from 'react';
import { Progress } from 'flowbite-react';
import tensorflow from '../../assets/images/tensorflow.svg';
import pytorch from '../../assets/images/pytorch.svg';
import python from '../../assets/images/python.svg';
import django from '../../assets/images/django.svg';
import reLogo from '../../assets/images/reactjs-icon.svg';
import java from '../../assets/images/java.svg';
import pandas from '../../assets/images/pandas.svg';
import numpy from '../../assets/images/numpy.svg';
import skills from '../../assets/images/skills.png'
import { motion } from 'framer-motion';

const Skills = () => {
  const hoverScale = 1.2;
  const tabScale = 0.8;

  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-16 text-center">
      <hr className="relative w-32 sm:w-48 h-1 my-4 mx-auto bg-gray-200 border-0 rounded dark:bg-gray-700" />
      <motion.div
              whileHover={{
                scale: hoverScale,
                transition: { type: 'spring', stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: tabScale }}
            >
            <img className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 left-1/2 dark:text-white dark:bg-gray-90" src={skills} alt="Skills" style={{ maxWidth: '60px', height: 'auto' }} />
      </motion.div>
      <h1 className='text-white pt-10 text-2xl'>My Skills</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-transparent dark:bg-gray-900 p-8 rounded-lg shadow-lg">
          <div className="font-rubik">
            <div className="text-left text-xl text-yellow-100">AI & Machine Learning Skills</div>
            <Progress color="yellow" progress={90} size="sm" />
            <br />
            <div className="text-left text-xl text-cyan-100">Data Analysis & Soft Skills</div>
            <Progress color="blue" progress={100} size="sm" />
            <br />
            <div className="text-left text-xl text-red-100">Web Design & Development Skills</div>
            <Progress color="red" progress={70} size="sm" />
          </div>
        </div>

        <div className="bg-transparent dark:bg-gray-900 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl text-white pr-12 pb-4">Frameworks & Languages</h1>

          <div className="grid grid-cols-4 gap-2">
            <motion.div
              whileHover={{
                scale: hoverScale,
                transition: { type: 'spring', stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: tabScale }}
            >
              <div className="text-center w-[50px] h-[50px]">
                <img src={tensorflow} alt="tensorflow" />
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
    </div>
  );
};

export default Skills;
