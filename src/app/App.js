import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './../Screens/Home/Home';
import CountryDetails from './../Screens/CountryDetails/CountryDetail';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<>
					<Route exact path="/" component={Home} />
					<Route exact path="/:countryCode" component={CountryDetails} />
				</>
			</BrowserRouter>
		);
	}
}

export default App;
