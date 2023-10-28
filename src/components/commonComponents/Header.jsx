import React, { useState } from 'react';
import logo from '../assets/Images/logo.png'
import { Outlet, Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';



const Header = () => {
  const [isMobileNavOpen, setMobileNav] = useState(false);

  const toggleNavbar = () => {
    setMobileNav(!isMobileNavOpen)
  }
  return (
    <div className='header'>
      <div>
        <nav className='flex justify-between  shadow-md   items-center py-4 md:px-8  px-4'>
          <Link to="/"><img className='w-32' src={logo} alt="logo" /></Link>

          <ul id='desktopNav' className='hidden md:flex font-medium items-center'>
            <li className='mx-4'><Link to="/">Home</Link></li>
            <li className='mx-4'><Link to="/about">About</Link></li>
            <li className='mx-4'><Link to="/about">Blog</Link></li>
            <li className='mx-4'><Link to="/contactus">More</Link></li>
            <li className='mx-4'><Link to="/contactus">Contact Us</Link></li>
            <li className='mx-4'><button className='bg-black text-white rounded px-4 py-2 border-white border-2 border-solid hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:border-black'><Link to="/demo">Demo</Link></button></li>
          </ul>

          <div onClick={toggleNavbar} className='block md:hidden'>
            {isMobileNavOpen ? (
              <div className='text-2xl cursor-pointer'> <AiOutlineClose /></div>)
              :
              (<div className='text-2xl cursor-pointer'> <GiHamburgerMenu /></div>
              )}

          </div>
        </nav>
        {isMobileNavOpen && (
          <ul id='mobileNav' className='flex font-medium flex-col py-8 text-center bg-slate-500 text-white w-screen md:hidden h-96 mx-auto justify-between '>
            <li className=''><Link to="/">Home</Link></li>
            <li className=''><Link to="/about">About</Link></li>
            <li className=''><Link to="/about">Blog</Link></li>
            <li className=''><Link to="/contactus">More</Link></li>
            <li className=''><Link to="/contactus">Contact Us</Link></li>
            <li className=''><button className=' rounded px-4 py-2 border-black border-2 border-solid bg-black hover:text-white hover:border-solid hover:border-2 hover:border-slate-500'><Link to="/demo">Demo</Link></button></li>
          </ul>
        )}
      </div>
      <Outlet />
    </div>
  )
}

export default Header