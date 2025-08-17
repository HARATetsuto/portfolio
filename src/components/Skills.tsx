import React from "react";

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skill-container">

        <div className="skill-card">
          <h3><strong>Programming Languages</strong></h3>
          <ul>
            <li>JavaScript ★★★☆☆</li>
            <li>TypeScript ★★☆☆☆</li>
            <li>Python ★★★★☆</li>
            <li>HTML5 / CSS3 ★★☆☆☆</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3><strong>Frameworks & Libraries</strong></h3>
          <ul>
            <li>React(with TypeScript) ★★☆☆☆</li>
            <li>Vite ★☆☆☆☆</li>
            <li>Bootstrap / Tailwind CSS ★★☆☆☆</li>
            <li>FastAPI ★★☆☆☆</li>
          </ul>
        </div>


        <div className="skill-card">
          <h3><strong>Tools & Others</strong></h3>
          <ul>
            <li>Git / GitHub ★★☆☆☆</li>
            <li>GitHub Actions (CI/CD) ★★☆☆☆</li>
            <li>Docker ★★☆☆☆</li>
            <li>Vim ★★★☆☆</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3><strong>Languages</strong></h3>
          <ul>
            <li>English (Business - Intermediate)</li>
            <li>Japanese (Native)</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Skills;