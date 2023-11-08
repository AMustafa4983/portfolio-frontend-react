import './App.css';
import React from 'react';

import {  Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";


import Home from "./components/home/Home";
import AboutPage from './components/about/AboutPage';
import ProjectsPage from './components/projects/ProjectsPage';
import NavBar from './components/defaults/NavBar';
import NoPage from './components/NoPage';
import FooterBar from './components/defaults/FooterBar';
import ProjectPage from './components/projects/ProjectPage';
import Tracker from './animations/Tracker';


function App() {

  return (

    
    <div className='App relative'>
      <NavBar/>
      <Tracker/>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
      <Routes>
        <Route index element={<Home />}>
        </Route>
        <Route path='about' element={<AboutPage />}>
        </Route>
        <Route path='projects' element={<ProjectsPage />}>
        </Route>
        <Route path={'projects/:slug'} element={<ProjectPage/>}>
        </Route>
        <Route path='*' element={<NoPage />}>
        </Route>
      </Routes>
      </motion.div>
      <FooterBar/>
    </div>
  );
}


export default App;
