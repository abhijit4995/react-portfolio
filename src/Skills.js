import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-row">
        <div className="skill-box frontend">
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React, Redux</p>
        </div>

        <div className="skill-box backend">
          <h3>Backend</h3>
          <p>PHP, SQL, Node.js</p>
        </div>
      </div>

      <div className="skills-row">
        <div className="skill-box programming-languages">
          <h3>Programming Languages</h3>
          <p>Python, JavaScript, Java, C++</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;