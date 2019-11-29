
import React from 'react';
import Home from './Screens/Home'
import Edit from './Screens/Edit'
import Addd from './Screens/Addd'
import MyCards from './Screens/MyCards'
import AllPhone from './Screens/AllPhone'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import MainList from './FrontScreen/MainList'
import BasketContainer from './FrontScreen/Basket'
import ProduitCards from './FrontScreen/ProduitCards'
import BasketStock from './FrontScreen/BasketCard';
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";




function App() {
// class App extends React.Component {
		return(

			// return () => {
				<Router>
					<Nav />
						<Switch>
					<Route exact path="/BasketCard" component={BasketStock} />
						<Route exact path="/Basket" component={BasketContainer} />
						<Route exact path="/ProduitCards" component={ProduitCards} />
						<Route exact path="/MainList" component={MainList} />
						<Route exact path="/MyCards" component={MyCards} />
							<Route exact path="/AddPhone" component={Addd} />
							<Route exact path="/AllPhone" component={AllPhone} />
							<Route exact path="/Edit" component={Edit} />
								<Route exact path='/' component={Home} />
						</Switch>
			
					<Footer />
				</Router>
		)
		// }
	}

export default App;
