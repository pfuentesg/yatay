import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

class App extends Component {
	render() {
		return (
      <Router>
        <div>
          <Navbar />
					<Route name="home" exact path="/" component={Home} />
					<Route name="home2" exact path="/hometwo" component={Home} />
					<Footer />
        </div>
      </Router>
		);
	}
}

export default App;
