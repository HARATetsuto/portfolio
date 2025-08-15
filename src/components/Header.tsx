import React from "react";
import LogoIcon from '../assets/my-icon.svg?react';

const Header: React.FC = () => {
	return (
		<header>
			<h1>
				<a href="/" id="header-title">
					<LogoIcon width={100} height={100}/>
					<span>Tetsu's portfolio</span>
				</a>
			</h1>

			<nav>
				<ul>
					<li><a href="#about">About</a></li>
					<li><a href="#skills">Skills</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;