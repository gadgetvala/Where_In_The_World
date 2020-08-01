import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Appbar from './../../components/Appbar/Appbar';
import Loader from './../../components/Loader/Loader';
import { fetchCountryDetails, emptyCountryDetail } from './../../action';
import { Container, BackContainer, Back, CountryDetailContainer, MakeBig, CountryData, Image } from './style.js';

class CountryDetail extends Component {
	componentDidMount() {
		this.props.fetchCountryDetails(this.props.match.params.countryCode);
	}

	render() {
		return (
			<Container theme={this.props.theme}>
				<Appbar searchBar={false} theme={this.props.theme}/>
				<BackContainer>
					<Link to="/" onClick={this.props.emptyCountryDetail}>
						<Back theme={this.props.theme}>Back</Back>
					</Link>
				</BackContainer>
				{Object.keys(this.props.detail).length === 0 ? (
					<Loader />
				) : (
					<CountryDetailContainer>
						<div>
							<Image src={this.props.detail.flag} alt={this.props.detail.alpha3Code}  theme={this.props.theme}/>
						</div>
						<CountryData theme={this.props.theme}>
							<MakeBig>Name: {this.props.detail.name}</MakeBig>
							<p>Code: {this.props.detail.alpha3Code}</p>
							<p>Capital: {this.props.detail.capital}</p>
							<p>Region: {this.props.detail.region}</p>
							<p>Area: {this.props.detail.area}</p>
							<p>Population: {this.props.detail.population}</p>
							<p>Timezones: {this.props.detail.timezones[0]}</p>
							<p>
								Languages:
								{this.props.detail.languages.length > 0
									? this.props.detail.languages[0].name
									: 'Unknown'}
							</p>
						</CountryData>
					</CountryDetailContainer>
				)}
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return { detail: state.countryDetail , theme: state.theme};
};

export default connect(mapStateToProps, { fetchCountryDetails, emptyCountryDetail })(CountryDetail);
