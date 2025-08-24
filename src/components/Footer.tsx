import React from 'react';
import LinkedInIcon from '../assets/linkedin.svg?react';

const Footer: React.FC = () => {
  const ICON_SIZE = 30;
  return (
    <footer>
      <div className="left-components">
        <a
          href="https://www.linkedin.com/in/tetsuto-hara-7822b5257/"
          target="_blank"
          rel="noreferrer"
          id="header-title"
        >
          <LinkedInIcon width={ICON_SIZE} height={ICON_SIZE} />
        </a>
      </div>

      <div className="right-conponents">
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
