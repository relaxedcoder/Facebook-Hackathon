import React,{ Component } from 'react';
import './header.css'
import logo from '../../images/logo.PNG';

class Header extends Component {
	render () {
		return (
			<div className="header">
				<div className="center">
					<img src={logo} />
				</ div>
				<div className="promoContainer">
					<div className="promo">Free delivery</div>
					<div className="promo">Original Medicines</div>
					<div className="promo">50+ cities</div>
				</ div>
			</ div>
			)
	}
}

export default Header;