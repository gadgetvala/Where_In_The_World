import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './../Screens/Home/Home';
import CountryDetails from './../Screens/CountryDetails/CountryDetail';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Home} exact/>
					<Route path="/:countryCode" component={CountryDetails} exact/>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
