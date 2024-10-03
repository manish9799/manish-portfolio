import React, { useState } from 'react'
import './navbar.css'
import { Link,scroller } from 'react-scroll'
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {

  const [showMenu,setShowMenu] = useState(false);
  
  return (
    <nav className='navbar'>
      <h1 className='logo'>MyPortfolio</h1>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'> Home</Link>
            <Link activeClass='active' to='aboutMe' spy={true} smooth={true} offset={-25} duration={500}  className='desktopMenuListItem'>About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-20} duration={500}  className='desktopMenuListItem'>Skills</Link>
            <Link activeClass='active' to='Experience' spy={true} smooth={true} offset={-20} duration={500}  className='desktopMenuListItem'>Experience</Link>
            <Link activeClass='active' to='projectSection' spy={true} smooth={true} offset={-20} duration={500}  className='desktopMenuListItem'>Projects</Link>
        </div>
        <button 
        className='desktopMenuBtn'
        onClick={() => scroller.scrollTo('contactSection', {
            smooth: true,
            offset: -20,
            duration: 500
        })}
        >
          Contact Me
        </button>

        <button className='mobileMenuBtn' onClick={()=>setShowMenu(!showMenu)}><IoMdMenu/></button>
        <div className='mobileNavMenu' style={{display:showMenu ? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-130} duration={500}  className='menuListItem' onClick={()=>setShowMenu(false)}> Home</Link>
            <Link activeClass='active' to='aboutMe' spy={true} smooth={true} offset={-10} duration={500}  className='menuListItem' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-3} duration={500}  className='menuListItem' onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='Experience' spy={true} smooth={true} offset={-1} duration={500}  className='menuListItem' onClick={()=>setShowMenu(false)}>Experience</Link>
            <Link activeClass='active' to='projectSection' spy={true} smooth={true} offset={-10} duration={500}  className='menuListItem' onClick={()=>setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to='contactSection' spy={true} smooth={true} offset={-10} duration={500}  className='menuListItem' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar