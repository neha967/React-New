import React, {Component} from 'react';
import Form from './Form';

class About extends Component {
	render(){
		return(
		 <div>
		   <Form/>
		   <section className="d-flex m-3 justify-content-around align-items-center">
		   <div className="w-50 flex-grow-1 mr-3">
		     <h2>About Us</h2>
		     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius auctor lacus nec feugiat. Phasellus sit amet ex ipsum. Praesent pharetra tincidunt tempor. Etiam velit eros, dapibus eget porta in, lacinia et magna. Nam eget eros non orci consectetur congue at ac augue. Proin eget arcu in enim feugiat ultricies. Curabitur maximus metus nec metus pretium viverra at et orci. Integer hendrerit ante ut placerat cursus.</p>
			 <p className="bg-secondary">Aliquam eget pharetra diam. Nulla placerat lorem at turpis tempor, vel ultrices dui tincidunt. Proin quis egestas lorem. Mauris vehicula lectus odio, sit amet dictum justo feugiat a. Praesent id dictum lacus. Sed ullamcorper id erat ut dictum. Fusce porttitor lorem sapien, in aliquet sapien convallis et. Donec nec mauris nulla. Curabitur cursus semper odio, et hendrerit ante. Nunc at cursus ante. Maecenas gravida ligula ut efficitur suscipit. Nulla id turpis varius, pretium nunc sed, fermentum sem. Sed lacinia nunc non interdum pellentesque.</p>
		   </div>
		   <div className="float-right bg-secondary w-25 h-25 pl-2 ml-2">
		     <h6>What We Do</h6>
		     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius auctor lacus nec feugiat. Phasellus sit amet ex ipsum. Praesent pharetra tincidunt tempor. Etiam velit eros, dapibus eget porta in, lacinia et magna</p>
		   </div>
		   </section>
		 </div>
		);
	}
}

export default About;