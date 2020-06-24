import React,{ Component } from 'react';
import './body.css'
import qr from '../../images/frame.png';
import msg from '../../images/messenger.PNG';
import doctor from '../../images/doctor.png'

class Body extends Component {
	render () {
		return (
			<div>
				<div className="container">
					<div className="left">
						<div className="bb">
							<div className="max">Medeli is a one-stop solution for all your medicine needs</div> 
							<li className="min">Get free-delivery of genuine medicines right at your doorstep</li> 
							<li className="min">We have satisfied customers in more than 50 cities</li>
						</ div>
						<div className="max order">Order Now</div>
						<div className="min"> Click on the messenger button on the bottom right or scan qr code / click on the link below</div>
		    			
					</ div>
					<div className="right">
		    			<img src={qr} />
		    			<a className="link" href="http://m.me/Developersforfb-relaxedcoder-104558897954522">http://m.me/Developersforfb-relaxedcoder-104558897954522</a>
					</ div>
				</ div>
			</div>
			
			)
	}
}

export default Body