import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar />
				</div>
			</Router>
		);
	}
}

export default App;
