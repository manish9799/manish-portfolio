import React from 'react'
import profile from "../../assets/profile.jpg"
import { MdOutlineFileDownload } from "react-icons/md"
import './introSection.css'

const IntroSection = () => {
  return (
    <div className='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <p className='myself'>
              <span>I'm</span> <span>Manish</span>
              <br/> 
              <span className='shineEffect'>Frontend Developer</span>
            </p>
            
            <p className='introPara'>
              I'm a passionate and skilled front-end developer specializing in creating seamless user experiences with React.js, HTML, CSS, and JavaScript. I focus on building clean, efficient code and responsive designs. Let's bring ideas to life!
            </p>
            <a 
          href="/Resume-Manish.pdf" 
          download="Resume-Manish.pdf" 
          className='downloadResume'
          style={{fontSize:'16px',color:'black'}}
        >
          <MdOutlineFileDownload style={{fontSize: '20px', marginLeft: '3px', marginRight: '10px'}} />
          My Resume
        </a>
        </div>
        <img src={profile} alt='Profile' className='profileImg' />
    </div>
  )
}

export default IntroSection