import React from 'react';
import Home from './Screens/Home'
import Edit from './Screens/Edit'
import Addd from './Screens/Addd'
import Footer from './Components/Footer'
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
						<Addd />
					</Route>
					<Route path="/">
						<Home />
					</Route>
					<Route path="/Edit">
						<Edit />
					</Route>

				</Switch>
			</div>
		  <Footer />
		</Router>
	);
}

export default App;
