import React, {Component} from 'react';

class Career extends Component {
	constructor(props){
		super(props);
		this.state = {
			isLoaded: true,
			infos: []
		}
		}
		
		componentDidMount(){
			fetch('https://api.thecatapi.com/v1/images/search?breed_ids=beng&include_breeds=true&limit=10')
	          .then(response => response.json())
	          .then(data => {
				  this.setState({
					  isLoaded: false,
					  infos: data
				  })
			  })
	}
		
	render(){
		//var {isLoaded, infos} = this.state; (destructuring)
		
		if(this.state.isLoaded){
			return <div>Loading...</div>;
		} else {
		return(
		<div className="container mt-4">
		 <div className="row">
		   <div className="col-lg-12">
		   <ul style={{listStyleType:"none"}}>
		   {this.state.infos.map(info => (
				 <li key={info.id}><img src={info.url} style={{width:"200px",height:"100px",float:"left",marginBottom:"20px",marginRight:"20px"}}/>
				 </li>
		   ))}
		   </ul>
		 </div>
		 </div>
		 </div>
		);
	}
	}
}

export default Career;