import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountryDetails } from './../../action';

class CountryDetail extends Component {
	componentDidMount() {
		this.props.fetchCountryDetails(this.props.match.params.countryCode);
	}

	render() {
		console.log(this.props);
		return <div>Hello from country detail page</div>;
	}
}

const mapStateToProps = (state) => {
	return { detail: state.countryDetail };
};

export default connect(mapStateToProps, { fetchCountryDetails })(CountryDetail);
