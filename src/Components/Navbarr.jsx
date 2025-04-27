import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../Style/Navbar.css'

const Navbarr = () => {
  const [menuOpen, setMenuOpen]=useState(false)
  return (
 <>
<nav>
<h1>Tarun Pal</h1>
      <div className="menu" onClick={()=>{
        setMenuOpen(!menuOpen)
      }}>
      <span></span>
      <span></span>
      <span></span>
      
     </div>
  <ul className={menuOpen ? "open" : ""}>
    <li> <NavLink to='/'>Home</NavLink></li>
    <li> <NavLink to='/education'>Education</NavLink></li>
    <li> <NavLink to='/skill'>Skills</NavLink></li>
    <li> <NavLink to='/project'>Project</NavLink></li>
    <li> <NavLink to='/contact'>Contact</NavLink></li>


  </ul>
</nav>

 </>
  )
}

export default Navbarr