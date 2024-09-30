import React from 'react';
import './skillsSection.css';
import { skills } from '../../configData';

const MySkills = () => {
  return (
    <section className="skillsSection" id='skills'>
      <h1 className='heading' >My <span className='highlight'>Skills</span></h1>
      <div className="skillList">
        {skills.map((skill, index) => (
          <div key={index} className="skillCard">
            <img src={skill.logo} alt={skill.name} />
            <span className="skillName">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MySkills;
