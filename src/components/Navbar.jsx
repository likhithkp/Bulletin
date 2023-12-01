import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div className='hidden md:w-full md:h-[80px] md:flex md:justify-around md:items-center md:bg-[#d4ecff]'>
        <div className='md:text-[2rem]'>
            <h1>Bulletin</h1>
        </div>
        <div className='md:flex md:gap-6 md:text-lg'>
            <Link to='/'>Home</Link>
            <Link to='/science'>Science</Link>
            <Link to='/health'>Health</Link>
            <Link to='/business'>Business</Link>
            <Link to='/sports'>Sports</Link>
            <Link to= '/technology'>Technology</Link>
        </div>
    </div>
  )
}

export default Navbar