import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Carousel } from 'flowbite-react';
import { BsGithub } from 'react-icons/bs';
import { GiCircuitry } from 'react-icons/gi';


const ProjectPage = () => {
  const [project, setProject] = useState({
    title: '',
    skills: [],
    hint: '',
    github_link: '',
    demo_link: '',
    images: [],
    description: '',
  });

  var { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/get-project/${id}`)
       .then((res) => res.json())
       .then((data) => {
          console.log(data);
          setProject(data[0]);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, [id]);

  
  return (
    <>
      <div>
        <h1 className="text-white mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl pt-4">
          {project.title}
        </h1>

        <div className="flex justify-center p-1">
          <p className="text-white pr-4">Technologies: </p>
          {project.skills && project.skills.map((skill, index) => (
            <span
              className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              key={index}
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="mb-6 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          {project.hint}
        </p>
        <a
          href={project.github_link}
          className="mx-2 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Github Code
          <BsGithub className="m-1" />
        </a>
        <a
          href={project.demo_link}
          className="mx-2 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-400 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Try Demo
          <GiCircuitry className="m-1" />
        </a>
        <h1 className="text-white text-xl mt-6">Project Screenshots</h1>
        <div className="flex justify-center">
          <Carousel className="mt-8 w-[80%] h-[30em]">
            {project.images && project.images.map((img, index) => (
              <img key={index} src={img} alt={`Screenshot ${index + 1}`} />
            ))}
          </Carousel>
        </div>
        <div className="">
          <h1 className="text-white text-xl mt-5">Description</h1>
          <p className="text-white text-md mt-3">{project.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
