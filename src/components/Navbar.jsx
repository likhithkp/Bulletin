import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] flex justify-evenly items-center bg-[#d4ecff]'>
        <div className='text-[2rem]'>
            <h1>Bulletin</h1>
        </div>
        <div className='flex gap-6 text-lg'>
            <Link to='/'>Home</Link>
            <Link to='/beauty'>Beauty</Link>
            <Link to='/finance'>Finance</Link>
            <Link to='/sports'>Sports</Link>
            <Link to= '/technology'>Technology</Link>
        </div>
        <div className='flex gap-3'>
            <input className='p-2 rounded-md outline-none text-black' type='text' placeholder='Search any..'/>
            <button className='bg-blue-500 text-white font-medium px-5 rounded-md'>Search</button>
        </div>
    </div>
  )
}

export default Navbar