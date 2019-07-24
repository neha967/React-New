import React, {Component} from 'react';

class Form extends Component {
	render(){
		return(
		 <form style={{backgroundColor:"grey",padding:"33px 0 0 30px",position:"relative",color:"white",height:"100px",width:"100%",verticalAlign:"center"}}>
		   <h3>Subscribe To Our Newsletter</h3>
		   <div className="float-right" style={{position:"absolute", right:"10%", top:"30%"}}>
		     <li style={{display:"inline",width:"100px"}}><input type="text" placeholder="Enter Email..." className="p-2 mr-2"/></li>
		     <li style={{display:"inline"}}><input type="button" value="Subscribe" className="bg-warning border border-none btn btn-large p-2"/></li>
		   </div>
		 </form>
		);
	}
}

export default Form;