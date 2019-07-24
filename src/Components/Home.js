import React, {Component} from 'react';
import Show from './Showcase';
import Info from './Info';


class Home extends Component {
	render(){
		return(
		 <div>
		   <Show />
		   <Info/>
		 </div>
		);
	}
}

export default Home;