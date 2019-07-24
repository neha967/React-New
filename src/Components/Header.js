import React, {Component} from 'react';
import logo from './logo.png';
import {Link} from 'react-router-dom';

class Header extends Component{
	render(){
		return(
		<div>
		<img src={logo} alt="logo"/>
        <header>
		  <nav className="navbar navbar-expand-lg bg-dark navbar-dark justify-content-end">
		    <ul className="navbar-nav justify-content-end">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Careers">Careers</Link>
              </li>
            </ul>
          </nav>
		</header>
		</div>
		);
	}
}

export default Header;