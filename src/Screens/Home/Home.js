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
			<Container>
				<Appbar search={this._searchTerm} searchBar />
				<DropDown search={this._searchByRegion} />
				<Grid data={this.props.countries} view={this.props.view}/>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return { countries: state.countries , view: state.view};
};

export default connect(mapStateToProps, { fetchCountry, fetchCountryBySearch, fetchCountryByRegion })(Home);
