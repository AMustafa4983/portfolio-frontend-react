import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

function ProjectsCard() {
  const [Projects, setProjects] = useState([]);

  useEffect(() => {
     fetch('http://127.0.0.1:8000/get-projects/')
        .then((res) => res.json())
        .then((data) => {
           console.log(data);
           setProjects(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);

  return (
    <div className='container'>
    {Projects.map((project) => (
      <motion.div
      whileHover={{ scale: 1.1}}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      key={project.id}
      >
      <Link to={`project/${project.id}`}>
        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className='card'>
            <div className='image'>
              <img class="h-auto max-w-full rounded-lg" src={project.images[0]} alt="" />
            </div>
            <div className='content'>
              <p className='text-lg'>{project.title}</p>
              <p className='p-2 text-md'>{project.hint}</p>
            </div>
          </div>
        </div>
      </Link>
      </motion.div>
    ))}
  </div>
  );
}

export default ProjectsCard;
