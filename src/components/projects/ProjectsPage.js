import React from 'react'
import { projects } from '../data/data'
import img from '../../assets/project-images/0.jpg'
import ProjectBanner from './ProjectBanner'

import { motion } from 'framer-motion'
import '../../styles/projects.css'

const ProjectsPage = () => {

  return (
    <>
    <ProjectBanner className="py-8"/>
    <div className='container'>
      {projects.map((project, index) => (
        <motion.div
        whileHover={{ scale: 1.1}}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
        <a href={`project?${index}`} class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className='card'>
          <div className='image'>
          <img class="h-auto max-w-full rounded-lg" src={img} alt="" />
          </div>
          <div className='content'>
            <p className='text-lg'>{project.title}</p>
            <p className='p-2 text-md'>{project.hint}</p>
          </div>
        </div>
        </a>
        </motion.div>
      ))}
    </div>
    </>



  )
}

export default ProjectsPage