import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from "./components/layout/Homepage";
import About from "./components/layout/About";
import Lyrics from "./components/layout/Lyrics";
import Searchpage from "./components/layout/Searchpage";

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/about/" component={About} />
					<Route path="/lyrics/:id" component={Lyrics} />
					<Route path="/inquiry/:trackName" component={Searchpage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
