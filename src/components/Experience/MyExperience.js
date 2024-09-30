import React, { useEffect, useRef } from 'react';
import './myExperience.css';
import { experiences } from '../../configData';

const MyExperience = () => {
    const experienceRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const experiencePage = experienceRef.current;
    
            if (scrollTop + window.innerHeight > experiencePage.offsetTop) {
                experiencePage.classList.add('fade-in');
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="experienceSection" id="Experience">
            <h1 className="heading">
                My <span className="highlight">Experience</span>
            </h1>
            <div className="experiencePage" ref={experienceRef}>
                {experiences.length > 0 ? (
                    experiences.map((exp, index) => (
                        <article className="experienceCard" key={index}>
                            <div className="expInfo">
                                <h3>{exp?.title || 'Title Unavailable'}</h3>
                                <div>
                                <h4>{exp?.company || 'Company Unavailable'} - {exp?.city || 'City Unavailable'}</h4>
                                <p>{exp?.duration || 'Duration Unavailable'}</p>
                                </div>
                            </div>
                            <p className="expDesc">{exp?.description || 'Description Unavailable'}</p>
                        </article>
                    ))
                ) : (
                    <p>No experiences available at this time.</p>
                )}
            </div>
        </section>
    );
};

export default MyExperience;
