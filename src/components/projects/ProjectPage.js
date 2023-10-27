import React from 'react'
import { Carousel } from 'flowbite-react';
import { projects } from '../data/data';
import { BsGithub} from 'react-icons/bs';
import {GiCircuitry} from 'react-icons/gi';
import img1 from '../../assets/project-images/1.jpg';
import img2 from '../../assets/project-images/0.jpg';
import img3 from '../../assets/project-images/2.jpg';
import { Badge } from 'flowbite-react';


const ProjectPage = () => {
  return (
    <>
      <h1 class="text-white mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl pt-4">{projects[0].title}</h1>
      
      <div className='flex justify-center p-1'><p className='text-white pr-4'>Technologies:  </p> 
      {projects[0].skills.map((skill =>(
      
      <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{skill}</span>

      )))}
      </div>

      <p class="mb-6 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{projects[0].hint}</p>
      <a href="#" class="mx-2 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
          Github Code
          <BsGithub className='m-1'/>
      </a>
      <a href="#" class="mx-2 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-400 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
          Try Demo
          <GiCircuitry className='m-1'/>
      </a>
      <h1 className='text-white text-xl mt-6'>Project Screenshots</h1>
      <div className='flex justify-center'>
        <Carousel className="mt-8 w-[80%] h-[30em]" >
          <img src={img1} alt=''></img>
          <img src={img2} alt=''></img>
          <img src={img3} alt=''></img>
        </Carousel>
      </div>
      <div className=''>
        <h1 className='text-white text-xl mt-5'>Description</h1>
        <p className='text-white text-md mt-3'>{projects[0].description}</p>
      </div>
    </>
  )
}

export default ProjectPage