import React, { Component } from "react";
import Logo from './Logo'


import Footer from "../Components/Footer";

export default class Home extends Component {
	render() {
		return (
			<div className="Home">
					<Logo />
				 <h3>"New experience to drink Czech beers."</h3>
				<img src="https://info24sata.com/wp-content/uploads/2019/09/pivo.jpg" alt=" "/>
			</div>
		);
	}
}
