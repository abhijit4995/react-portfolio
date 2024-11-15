import React from 'react';
import './About.css';
import profile from './abhijit.jpg';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hi, I'm Abhijit Shingade, a passionate web developer with expertise in building
          interactive and dynamic web applications. I specialize in front-end
          development with modern frameworks like React.js and backend technologies
          such as Node.js. When I'm not coding, I enjoy exploring new technologies,
          traveling, and photography.
        </p>
      </div>

      <div className="about-image">
        <img
          src={profile}
          alt="Profile"
          className="profile-img"
        />
      </div>
    </section>
  );
};

export default About;