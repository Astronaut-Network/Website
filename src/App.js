import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Tokenomics from "./Components/Tokenomics";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<Tokenomics />
		</div>
	);
}

export default App;
