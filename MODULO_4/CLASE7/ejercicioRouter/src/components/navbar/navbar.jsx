import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
        <li>
                <NavLink to='/' className={({isActive}) => (isActive ? 'error' : '')}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/about' className={({isActive}) => (isActive ? 'error' : '')}>
                    About
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar