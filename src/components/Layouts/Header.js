import React from 'react'
import {FaBars} from 'react-icons/fa'
function Header() {
  return (
    <nav className=' bg-[--col] h-20 w-full items-center p-8  '>
    
    <FaBars className='md:hidden ' color='white' size={35}/>
    <ul className=' list-none  justify-end hidden sm:flex '>
        <li className=' '><a className=' text-decoration-line: no-underline text-white px-3 rounded text-lg uppercase hover:bg-[#89fa5c]  ' href='#'>Home</a></li>
        <li  className=' '><a className='text-decoration-line: no-underline text-white px-3 rounded text-lg uppercase hover:bg-[#89fa5c]' href='#'>About</a></li>
        <li  className='  '><a className='text-decoration-line: no-underline text-white px-3 rounded text-lg uppercase hover:bg-[#89fa5c]' href='#'>Projects</a></li>
        <li  className=' '><a className='text-decoration-line: no-underline text-white px-3 rounded text-lg uppercase hover:bg-[#89fa5c]' href='#'>Contact</a></li>
    </ul>
</nav>
  )
}

export default Header