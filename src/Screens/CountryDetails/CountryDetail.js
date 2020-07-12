import React, { Component } from 'react';
import Appbar from './../../components/Appbar/Appbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCountryDetails } from './../../action';
import './CountryDetail.css';

class CountryDetail extends Component {
	componentDidMount() {
		this.props.fetchCountryDetails(this.props.match.params.countryCode);
	}

	render() {
		console.log(this.props.detail);
		return (
			<div className="countryDetails">
				<Appbar searchBar={false}/>
				<div className="countryDetails_backButton">
					<Link to="/">
						<p>Back</p>
					</Link>
				</div>
				<div className="countryDetails_details">
					<div className="countryDetails_details--img">
						<img src={this.props.detail.flag} alt={this.props.detail.alpha3Code} />
					</div>
					<div className="countryDetails_details--data">
						<p className="makebig">
							<span className="makeBlock">Name:</span> {this.props.detail.name}
						</p>
						<p>
							<span className="makeBlock">Code:</span> {this.props.detail.alpha3Code}
						</p>
						<p>
							<span className="makeBlock">Capital:</span> {this.props.detail.capital}
						</p>
						<p>
							<span className="makeBlock">Region:</span> {this.props.detail.region}
						</p>
						<p>
							<span className="makeBlock">Area:</span> {this.props.detail.area}
						</p>
						<p>
							<span className="makeBlock">Population:</span> {this.props.detail.population}
						</p>
						<p>
							<span className="makeBlock">Timezones:</span>{' '}
						</p>
						<p>
							<span className="makeBlock">Languages:</span>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { detail: state.countryDetail };
};

export default connect(mapStateToProps, { fetchCountryDetails })(CountryDetail);
