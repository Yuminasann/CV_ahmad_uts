import React from 'react';
import '../SkillList.css'

const skills = [
  { name: 'Web Developer', percentage: 40 },
  { name: 'Desktop Developer', percentage: 50 },
];

const SkillsList = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
            <div className="skill-percentage">{skill.percentage}%</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;