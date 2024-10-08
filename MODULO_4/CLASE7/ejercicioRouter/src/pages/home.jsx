import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {

    const userId = 1

  return (
    <div>
        <h3>
        <ul>
        <li>
                <NavLink to={`/user/${userId}`} activeClassName='error'>
                    user Param
                </NavLink>
            </li>
            <li>
                <NavLink to='/users' className={({isActive}) => (isActive ? 'error' : '')}>
                    Users Prural
                </NavLink>
            </li>
        </ul>
        </h3>
    </div>
  )
}

export default Home