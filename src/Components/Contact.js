import React, {Component} from 'react';
import Form from './Form';

class Contact extends Component {
	render(){
		return(
		<div>
		  <Form/>
		  <section className="clearfix m-3">
		    <div className="float-left text-white">
			  <h3 className="text-dark">Services</h3>
			  <div className="border bg-secondary p-2 mb-2 w-75">
			    <h5>Website Design</h5>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies at, vulputate id lorem. Nulla facilisi.</p>
				<p>Pricing: $1,000 - $3,000</p>
			  </div>
			  <div className="border bg-secondary p-2 mb-2 w-75 w-75">
			    <h5>Website Maintenance</h5>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies at, vulputate id lorem. Nulla facilisi.</p>
				<p>Pricing: $250 per month</p>
			  </div>
			  <div className="border bg-secondary p-2 mb-2 w-75">
			    <h5>Website Hosting</h5>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies at, vulputate id lorem. Nulla facilisi.</p>
				<p>Pricing: $25 per month</p>
			  </div>
			</div>
		    <aside className="float-right border bg-secondary text-white w-25 mt-4 mr-4 p-3">
			<h3>Get a Quote</h3>
			<form>
			  <label for="name">Name</label><br></br>
			  <input type="text" placeholder="Name"/><br></br><br></br>
			  <label for="email">Email</label><br></br>
			  <input type="email" placeholder="Email Address"/><br></br><br></br>
			  <label>Message</label><br></br>
			  <textarea value="Message"/><br></br>
			  <input type="submit" value="Send" className="bg-warning border-0 text-white"/>
			</form>
			</aside>
		 </section>
		</div>
		);
	}
}

export default Contact;