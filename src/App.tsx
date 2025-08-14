import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Career from "./components/Career";
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
				<Career />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

export default App;
