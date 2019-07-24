import React, {Component} from 'react';
import Showcase from './showcase.jpg';
import Form from './Form';

class Show extends Component {
	render(){
		const mystyle = {
			background: `url("${Showcase}")`,
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			position: "relative",
			transform: "translate(0,5px)",
			transfor: "rotateX(360deg)",
			height: "450px",
			width: "100%",
			
		}
		const setting = {
			position: "absolute",
			color: "white",
			top: "40%",
			left: "25%",
		}
		
		const set = {
			position: "absolute",
			color: "white",
			top: "50%",
			left: "15%",
		}
		return(
		<div>
		 <div style={mystyle}></div>
		 <div>
		   <h1 style={setting}>Affordable Professional Web Design</h1><br></br>
		   <p style={set} className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem interdum condimentum.</p>
		 </div>
		 <Form/>
		 </div>
		);
	}
}

export default Show;