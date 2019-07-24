import React, {Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Career from './Components/Careers';
import Footer from './Components/Footer';

class App extends Component {
	render(){
  return (
  <Router>
      <div>
	    <Header/>
		<Route exact path="/" component={Home}/>
		<Route exact path="/About" component={About}/>
		<Route exact path="/Contact" component={Contact}/>
		<Route exact path="/Careers" component={Career}/>
		<Footer/>
      </div>
	  </Router>
   );
	}
}

export default App;
