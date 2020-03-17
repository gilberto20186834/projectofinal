import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Muro from './Routes/Muro';
import inicio from './Routes/inicio';
import registro from './Routes/registro';

class App extends Component {
render() {
	return (
	<BrowserRouter>
		<div className="App">
		<Switch>
			<Route exact path = '/' component={Muro} />
			<Route path = '/inicio' component={inicio} />
			<Route path = '/registro' component={registro} />
		</Switch>
		</div>
		</BrowserRouter>
		);
	
}
}

export default App;
