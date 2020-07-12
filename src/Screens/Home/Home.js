import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountry, fetchCountryBySearch, fetchCountryByRegion } from './../../action';
import Appbar from './../../components/Appbar/Appbar';
import Grid from './../../components/Grid/Grid.js';
import DropDown from './../../components/DropDown/DropDown';
import './Home.css';

class Home extends Component {
	componentDidMount() {
		this.props.fetchCountry();
	}

	_searchTerm = (term) => {
		if (term === '') {
			this.props.fetchCountry();
		} else {
			this.props.fetchCountryBySearch(term);
		}
	};

	_searchByRegion = (region) => {
		region === '' ? this.props.fetchCountry() : this.props.fetchCountryByRegion(region);
	};

	render() {
		return (
			<div className="main">
				<Appbar search={this._searchTerm} searchBar />
				<DropDown search={this._searchByRegion} />
				<Grid data={this.props.countries} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { countries: state.countries };
};

export default connect(mapStateToProps, { fetchCountry, fetchCountryBySearch, fetchCountryByRegion })(Home);

// TODO
//header > where in the world? , dark mode option
// Search bar and filter by
// country image, country name, population, region, capital
//ccc5b9,403d39,252422,eb5e28,eb5e28
