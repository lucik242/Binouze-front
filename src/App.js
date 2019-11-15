import React from 'react';
import Home from './Screens/Home'

import AddPhone from './Screens/AddPhone'
import Edit from './Screens/Edit'
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";



function App() {
  return (
		<Router>
			<div>
				{/* <Nav /> */}

				<Switch>
					<Route path="/add">
						<AddPhone />
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
