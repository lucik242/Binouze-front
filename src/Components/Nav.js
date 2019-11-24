import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Nav extends Component {
        render() {
                return (
                        <div>
                                <nav className="menu">
                                       

                                        <div className="menu__right">
                                                <ul className="menu__list">
                                                        <li className="menu__list-item"><Link className="menu__link menu__link--active" to="/">Home</Link></li>
                                                        <li className="menu__list-item"><Link className="menu__link" to="/AddPhone">Ajouter les produits</Link></li>
                                                          <li className="menu__list-item"><Link className="menu__link" to="/Edit">Modifier les produits</Link></li>
                                                        <li className="menu__list-item"><Link className="menu__link" to="/MainList">Produits</Link></li>
                                                
                                                </ul>

                                        </div>
                                </nav>

                         </div>
                )
        }
}


