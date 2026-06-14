import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import "./NavbarStyles.css"


function Navbar() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <nav className='Navbaritems'>
      <h1 className='navbar-logo'>Trippy</h1>
      <div className='menu-icons' onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}
        ></i>
      </div>

      <ul className={clicked ? "nav-menu active":"nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName} >
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>

          );

        })}

        <button>Sign up</button>
      </ul>
    </nav>
  )
}

export default Navbar