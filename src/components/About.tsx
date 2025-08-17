import React from "react";
import myPhoto from '../assets/my-photo-w768-h1024.JPG';


const About: React.FC = () => {
  return (
    <section id="about">
      <div className="about-left">
        <h2>About Me</h2>
        <p>
          Hello! I'm Tetsuto HARA, a passionate front-end developer.
          I enjoy building clean, efficient, and user-friedly web applications.
        </p>
      </div>

      <div className="about-right">
        <img src={myPhoto} alt="my-photo" />
      </div>
    </section>
  )
}

export default About;