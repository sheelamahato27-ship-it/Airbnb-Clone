import React from 'react'
import Nav1 from './Nav1'
import SearchBar from './SearchBar'

const Navbar = () => {
  
  return (
    <div className=' bg-gray-100 fixed  top-0 left-0 z-50 shadow-sm  w-full  items-center justify-between pb-4 border-b-2 border-gray-300 flex flex-col '>
      
      <div className='w-full'>
      <Nav1 />
      </div>
      <div className='w-full mt-2 md:mt-0'>
      <SearchBar />
      </div>

    </div>
  )
}

export default Navbar
