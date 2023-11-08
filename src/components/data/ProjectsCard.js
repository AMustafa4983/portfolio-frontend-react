import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { projects } from './data';

function ProjectsCard() {

  return (
    <div className='container'>
    {Object.entries(projects).map(([slug, {title, hint, images}]) => (
      <motion.div
      whileHover={{ scale: 1.1}}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
      <Link to={`${slug}`}>
        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className='card'>
            <div className='image'>
              <img class="h-auto max-w-full rounded-lg" src={images[0]} alt="" />
            </div>
            <div className='content'>
              <p className='text-lg'>{title}</p>
              <p className='p-2 text-md'>{hint}</p>
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
