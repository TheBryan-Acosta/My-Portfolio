import React from "react";
import "./App.css";

//Components
import Navigation from "./components/Navbar";
import Projects from "./components/Projects";
import Quote from "./components/Quote";
import Skills from "./components/Skills";

function App() {
	return (
		<div>
			<Navigation />
			<Projects />
			<Quote />
			<Skills />
		</div>
	);
}

export default App;
