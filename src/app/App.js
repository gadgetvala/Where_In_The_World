import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './../Screens/Home/Home';
import CountryDetails from './../Screens/CountryDetails/CountryDetail';
import history from './../components/History/History';

const App = () => {
	return (
		<BrowserRouter history={history}>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/:countryCode" component={CountryDetails} exact />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
