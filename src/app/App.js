import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './../Screens/Home/Home';
import CountryDetails from './../Screens/CountryDetails/CountryDetail';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/:countryCode" component={CountryDetails} exact />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
