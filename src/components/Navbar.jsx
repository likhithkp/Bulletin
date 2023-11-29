import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div className='w-full h-[80px] flex justify-around items-center bg-[#d4ecff]'>
        <div className='text-[2rem]'>
            <h1>Bulletin</h1>
        </div>
        <div className='flex gap-6 text-lg'>
            <Link to='/'>Home</Link>
            <Link to='/beauty'>Beauty</Link>
            <Link to='/finance'>Finance</Link>
            <Link to='/sports'>Sports</Link>
            <Link to= '/technology'>Technology</Link>
            <Link to= '/searchResults'></Link>
        </div>
    </div>
  )
}

export default Navbar