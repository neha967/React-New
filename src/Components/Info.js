import React, {Component} from 'react';
import logo from './logo_html.png';
import css from './logo_css.png';
import design from './logo_brush.png';

class Info extends Component {
	render(){
		return(
		 <div className="row">
		   <div className="col-lg-4 text-center mt-3">
		     <img src={logo} alt="html" className="w-25"/>
			 <h3>HTML5 Markup</h3>
			 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
		   </div>
		   <div className="col-lg-4 text-center mt-3">
		     <img src={css} alt="html" className="w-25"/>
			 <h3>CSS styling</h3>
			 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
		   </div>
		   <div className="col-lg-4 text-center mt-3">
		     <img src={design} alt="html" className="w-25"/>
			 <h3>Graphic Design</h3>
			 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
		   </div>
		 </div>
		);
	}
}

export default Info;