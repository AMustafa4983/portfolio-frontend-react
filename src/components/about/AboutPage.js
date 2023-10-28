import React from 'react'
import AboutBanner from './AboutBanner'

import Story from './Story'
import Education from '../data/Education'
import Experience from '../data/Experience'
const AboutPage = () => {

  return (
    <div>
      <AboutBanner/>
      <Story />
      <Education/>
      <Experience/>
    </div>
  )
}

export default AboutPage