import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo-box">
        <img className='logo' src="./imgs/icons8-computer-96.png" alt="computer logo" />
      </div>

      <div className="navlinks-box">
        <ul className='navlinks'>
          <li className='navlink'>
            <a href="#helloSection">Welcome</a>
          </li>

          <li className='navlink'>
            <a href="#aboutSection">About Me</a>
          </li>

          <li className='navlink'>
            <a href="#skillsSection">Skills</a>
          </li>

          <li className='navlink'>
            <a href="#heatingSection">Heating Company</a>
          </li>

          <li className='navlink'>
            <a href="#wanakaSection">Wanaka Hotels</a>
          </li>

          <li className='navlink'>
            <a href="#gakabSection">GAKAB</a>
          </li>

          <li className='navlink'>
            <a href="#contactSection">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
