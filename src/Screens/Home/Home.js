import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountry, fetchCountryBySearch, fetchCountryByRegion } from './../../action';
import Appbar from './../../components/Appbar/Appbar';
import Grid from './../../components/Grid/Grid.js';
import DropDown from './../../components/DropDown/DropDown';
import { Container } from './Style';

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
			<Container theme={this.props.theme}>
				<Appbar search={this._searchTerm} searchBar theme={this.props.theme} />
				<DropDown search={this._searchByRegion} theme={this.props.theme} />
				<Grid data={this.props.countries} view={this.props.view} theme={this.props.theme} />
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return { countries: state.countries, view: state.view, theme: state.theme };
};

export default connect(mapStateToProps, { fetchCountry, fetchCountryBySearch, fetchCountryByRegion })(Home);
