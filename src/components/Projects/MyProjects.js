import React from 'react'
import './myProjects.css'
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { projects } from '../../configData';

const MyProjects = () => {

    return (
        <section id='projectSection'>
            <h1 className='heading' >My <span className='highlight'>Projects</span></h1>
            <div className='myProjects'>

                {projects?.length && projects?.map((item, i) => {
                    return (
                        <React.Fragment key={i}>
                            <div  className='projectCard projectCard-web'>
                                <img src={item?.image} alt='About Me' className='projectImg' />
                                <div style={{position:'relative',}}>
                                    <p className='projectName' style={{borderRadius:'0px 10px 0px 0px'}}>{item?.name || '-'}</p>
                                    <div style={{display:'flex'}}>
                                        <div className='projectDescription-web'>
                                                {item && item?.description?.split('. ').map((desc, index) => (
                                                    <p className='projectDesc' key={index}>{desc || '-'}.</p>
                                                ))}
                                        </div>
                                               
                                        <div className='projectLinks'>
                                            <a href={item?.deployLink} target='_blank' rel="noreferrer">
                                                <CgWebsite  className='p-link'/>
                                            </a>
                                            <a href={item?.githubLink} target='_blank' rel="noreferrer">
                                                <FaGithub  className='p-link' />
                                            </a>
                                        </div>
                                    </div>
                                    {/* <p className='techNames'> TeachStack :- 
                                        { item?.techStack?.map((techName,techIndex)=>(
                                            <span className='tech'>{techName || "-"}</span>
                                        )) }
                                        </p> */}
                                </div>
                        </div>

                        <div className=' projectCard projectCard-mobile' style={{marginTop:'30px'}} key={i}>
                            <div className='projectDetails'>
                                <p className='projectName'>{item?.name || '-'}</p>
                            <img src={item?.image} alt='About Me' className='projectImg' />
                                <div className='projectContent'>
                                    <div className='projectLinks'>
                                        <a href={item?.deployLink} target='_blank' rel='noreferrer'>
                                            <CgWebsite className='p-link' />
                                        </a>
                                        <a href={item?.githubLink} target='_blank' rel='noreferrer'>
                                            <FaGithub className='p-link' />
                                        </a>
                                    </div>
                                    <div className='projectDescription'>
                                        {item?.description?.split('. ').map((desc, decIndex) => (
                                            <p className='projectDesc' key={decIndex}>{desc || '-'}.</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </section>
    )
}

export default MyProjects