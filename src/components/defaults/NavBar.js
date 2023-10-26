import React from 'react'
import { navBar_data } from '../data/data'
import Logo from '../../assets/images/WhiteLogo.svg'
import { Navbar } from 'flowbite-react';
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    
  <Navbar fluid rounded className='bg-transparent'>
    <Link to='/'>
      <Navbar.Brand href="/" className="mx-9 my-3 w-12 h-12 sm:h-9">
        <img src={Logo} className='ml-5' alt="Abdelrahman's Logo" />
      </Navbar.Brand>
    </Link>

      <Navbar.Collapse className=''>
      { navBar_data.map((element) =>
        <Link to={element.link}>
        <Navbar.Link active><p className='text-white font-rubik hover:text-gray-300'>{element.title}</p></Navbar.Link>
        </Link>
      )}
      </Navbar.Collapse>

      <Navbar.Collapse >
        <Navbar.Link href='https://www.youtube.com/@AMustafa4983' target='_blank' active><p className='mr-2 text-white font-rubik hover:text-gray-300'>Youtube</p></Navbar.Link>
        <Navbar.Link href='https://www.medium.com/@AMustafa4983' target='_blank' active><p className='mr-10 text-white font-rubik hover:text-gray-300'>Medium</p></Navbar.Link>
      </Navbar.Collapse>
  </Navbar>
  )
}

export default NavBar;