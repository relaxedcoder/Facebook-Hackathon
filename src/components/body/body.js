import React,{ Component } from 'react';
import './body.css'
import qr from '../../images/frame.png';
import msg from '../../images/messenger.PNG';

class Body extends Component {
	render () {
		return (
			<div>
				<div className="someText">
					<h2>Order NOW</h2>
					<p>We use facebook messenger for our services</p>
				</ div>
				<div className="container">
					<div className="cell left">
						<p> Click on the messenger button on the bottom right</p>
						<img src={msg} />
					</ div>
					<div className="cell right">
						<p>Scan the qr code below or click on the link below</p>
	    				<img src={qr} />
	    				<a href="http://m.me/Test-page-108266287590346">http:\/\/m.me/Test-page-108266287590346</a>
					</ div>
				</ div>
			</div>
			
			)
	}
}

export default Body