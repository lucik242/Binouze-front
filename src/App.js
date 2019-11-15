import React from 'react';
import Home from './Screens/Home'
import Nav from './Components/Nav'
import AddPhone11 from './Screens/AddPhone11'
import Edit from './Screens/Edit'
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
		<Router>
			<div>
				{/* <Nav /> */}

				<Switch>
					<Route path="/add">
						<AddPhone11 />
					</Route>
					<Route path="/">
						<Home />
					</Route>
					<Route path="/Edit">
						<Edit />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
