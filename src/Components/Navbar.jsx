import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className=' header'>
        <NavLink to={"/"} className={"w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-lg"}>
        <p className='blue-gradient_text'>AS</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
          <NavLink to={"/about"} className={({isActive})=>((isActive ? " text-blue-500":"text-black")+"font-bold")}>
          About
          </NavLink>
          <NavLink to={"/project"} className={({isActive})=>isActive ? " text-blue-500":"text-black"}>
          Project
          </NavLink>
        </nav>
    </header>
  )
}

export default Navbar