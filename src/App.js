import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import HomePage from "./components/layout/HomePage";
import About from "./components/layout/About";

import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/about/" component={About} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
