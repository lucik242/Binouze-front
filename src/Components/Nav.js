import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Button } from 'reactstrap';


export default class Nav extends Component {
	render() {
		return (
				
			//menu
			<nav  id='menu' class="navbar navbar-expand-lg navbar-dark ">
		
				<Link  to="/" class="navbar-brand" >
					<i class="fas fa-home"></i>
				</Link>

				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
   
				<div class="collapse navbar-collapse" id="navbarNavDropdown">
					<ul class="navbar-nav">
						{/* <li class="nav-item active">
							<Link className="nav-link" to="/">
								<span class="sr-only">(current)</span>
								Home
							</Link>
						</li> */}

						<li class="nav-item">
							<Link to="/MainList" className="nav-link">
								E-shop
							</Link>
						</li>
						<li class="nav-item">
							<Link className="nav-link" to=" ">
							
							</Link>
						</li>
										<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdownMenuLink"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Dashboard
							</a>
							<div
								class="dropdown-menu"
								aria-labelledby="navbarDropdownMenuLink"
							>
								<Link to="/AddArticle" class="dropdown-item" >
									Ajouter produit
								</Link>
								<Link to="/AllArticle" class="dropdown-item">
								Liste de produits
								</Link>
								{/* <Link to="/Edit" class="dropdown-item" >
									Edit produit
								</Link> */}
							</div>
						</li>
					</ul>
		
						<ul class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar"class="navbar-nav ml-auto flex-nowrap">
							<li class="nav-item">
								
								<Link to=" " class="nav-link m-2 menu-item">
					
								</Link>
							</li>
							<li class="nav-item">
								<Link to="/SeConnecter" class="nav-link m-2 menu-item">Se connecter</Link>
							</li>
							<li class="nav-item">
							<Link to="/Basket" class="nav-link m-2 menu-item nav-active">
								{/* <Badge color="secondary">{this.state.panier.length}</Badge>
                                     */}
							<Button color="secondary" outline>
									<i class="fas fa-shopping-basket" /> <Badge color="secondary"> 0
									{/* {this.state.panier.reduce(
										(acc, current) => acc + current.prix,
										0)} */}
									</Badge>
							</Button>
							</Link>																											
							</li>
						</ul>
					  
				</div>
			</nav>
		);
	}
}
