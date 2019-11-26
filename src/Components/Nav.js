import React, { Component } from "react";
import { Link } from "react-router-dom";

// export default class Nav extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<nav className="menu">
// 					<div className="menu__left">
// 						<ul>
// 							<li>tarararar</li>
// 						</ul>
// 					</div>
// 					<div className="menu__right">
// 						<ul className="menu__list">
// 							<li className="menu__list-item">
// 								<Link className="menu__link menu__link--active" to="/">
// 									Home
// 								</Link>
// 							</li>
// 							<li className="menu__list-item">
// 								<Link className="menu__link" to="/AddPhone">
// 									Ajouter les produits
// 								</Link>
// 							</li>
// 							<li className="menu__list-item">
// 								<Link className="menu__link" to="/Edit">
// 									Modifier les produits
// 								</Link>
// 							</li>
// 							<li className="menu__list-item">
// 								<Link className="menu__link" to="/MainList">
// 									Produits
// 								</Link>
// 							</li>
// 						</ul>
// 					</div>
// 				</nav>
// 			</div>
// 		);
// 	}
// }

export default class Nav extends Component {
	render() {
		return (
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand" href="#">
					Navbar
				</a>
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
						<li class="nav-item active">
							<Link className="nav-link" to="/">
								<span class="sr-only">(current)</span>
								Home
							</Link>
						</li>

						<li class="nav-item">
							<Link className="nav-link" to="/MainList">
								Produits
							</Link>
						</li>
						<li class="nav-item">
							<Link className="nav-link" to="/Edit">
								Modifier les produits
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
								Dropdown link
							</a>
							<div
								class="dropdown-menu"
								aria-labelledby="navbarDropdownMenuLink"
							>
								<a class="dropdown-item" href="#">
									Action
								</a>
								<a class="dropdown-item" href="#">
									Another action
								</a>
								<a class="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
