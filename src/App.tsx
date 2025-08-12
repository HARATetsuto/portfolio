import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
	return (
		<>
			<Header />
			<main>
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

export default App;
