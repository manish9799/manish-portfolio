import React from 'react'
import './aboutme.css'
import workingImg from "../../assets/developer.png"


const AboutMe = () => {
    return (
        <>
        <section id='aboutMe'>
            <h1 className='heading' >About <span className='highlight'>Me</span></h1>
            <div className='aboutMeSection'>
                    <img src={workingImg} alt='About Me' className='workingImg' />
                    <p className='aboutPara'>
                       Hi, I'm <span className='highlight large-text'>Manish Katara</span> <br/> A dedicated front-end developer with <span className='highlight '>1.5+ year</span> of hands-on experience specializing in ReactJS. My journey in web development has allowed me to work on a diverse range of projects, where I've honed my skills in creating responsive and engaging web applications. I take pride in my attention to detail and commitment to writing maintainable, efficient code. Passionate about delivering high-quality user experiences, I continuously strive to stay updated with the latest industry trends and technologies. My goal is to leverage my expertise to build seamless, user-friendly interfaces that not only meet but exceed user expectations, contributing to the overall success of any project I undertake.
                    </p>
            </div>
        </section>
        </>
    )
}

export default AboutMe