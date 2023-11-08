import React from 'react';
import { navBar_data } from '../data/data';
import Logo from '../../assets/images/WhiteLogo.svg';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }} // Initial animation properties
      animate={{ opacity: 1, y: 0 }} // Animation properties
      transition={{ duration: 0.5 }} // Animation duration
      className="bg-transperant"
    >
      <Navbar fluid rounded className="bg-transparent">
        <Link to="/">
          <Navbar.Brand href="/" className="mx-9 my-3 w-12 h-12 sm:h-9">
            <img src={Logo} className="ml-5" alt="Abdelrahman's Logo" />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle className="sm:hidden"/>

        <Navbar.Collapse>
          {navBar_data.map((element) => (
            <Link to={element.link} key={element.title}>
              <Navbar.Link active>
                <motion.p 
                  className="text-white font-rubik hover:text-gray-300"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  {element.title}
                </motion.p>
              </Navbar.Link>
            </Link>
          ))}
        </Navbar.Collapse>

        <Navbar.Collapse>
          <Navbar.Link href="https://www.youtube.com/@AMustafa4983" target="_blank" active>
            <motion.p 
              className="mr-2 text-white font-rubik hover:text-gray-300"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              Youtube
            </motion.p>
          </Navbar.Link>
          <Navbar.Link href="https://www.medium.com/@AMustafa4983" target="_blank" active>
            <motion.p 
              className="mr-10 text-white font-rubik hover:text-gray-300"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              Medium
            </motion.p>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </motion.div>
  );
};

export default NavBar;
