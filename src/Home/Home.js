import React, { Component } from "react";
import Logo from './Logo'
import FrontImg from './FrontImg'


import Footer from "../Components/Footer";

export default class Home extends Component {
	render() {
		return (
			<div className="Home">
					<Logo />
				 <h3>"New experience to drink Czech beers."</h3>
					<FrontImg />
			</div>
		);
	}
}
