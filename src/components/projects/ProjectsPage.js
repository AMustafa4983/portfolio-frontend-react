import React from 'react'
import ProjectsCard from '../data/ProjectsCard'
import ProjectsBanner from './ProjectsBanner'
import '../../styles/projects.css'

const ProjectsPage = () => {

  return (
    <>
    <ProjectsBanner className="py-8"/>
    <ProjectsCard/>
    </>



  )
}

export default ProjectsPage