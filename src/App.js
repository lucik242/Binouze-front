
import React from 'react';
import Home from './Home/Home'
import Edit from './Screens/Edit'
import Addd from './Screens/Addd'
import AllArticle from './Screens/AllArticle'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import MainList from './FrontScreen/MainList'
import BasketContainer from './FrontScreen/Basket'
import ProduitCards from './FrontScreen/ProduitCards'
import BasketStock from './FrontScreen/BasketCard'
import Logo from './Home/Logo'
import FrontImg from './Home/FrontImg'
import UserInscription from './UserConnection/UserInscription'
import UserLogin from './UserConnection/UserLogin'
import SeConnecter from './UserConnection/SeConnecter'
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


function App() {

		return(
				<Router>
					<Nav />
						<Switch>
					<Route exact path="/SeConnecter" component={SeConnecter} />
					<Route exact path="/Login" component={UserLogin} />
					<Route exact path="/Inscription" component={UserInscription} />
					<Route exact path="/FrontImg" component={FrontImg} />
					<Route exact path="/Logo" component={Logo} />
					<Route exact path="/BasketCard" component={BasketStock} />
						<Route exact path="/Basket" component={BasketContainer} />
						<Route exact path="/ProduitCards" component={ProduitCards} />
						<Route exact path="/MainList" component={MainList} />
							<Route exact path="/AddArticle" component={Addd} />
							<Route exact path="/AllArticle" component={AllArticle} />
							<Route exact path="/Edit" component={Edit} />
								<Route exact path='/' component={Home} />
						</Switch>
					<Footer />
				</Router>
		)
	
	}

export default App;
