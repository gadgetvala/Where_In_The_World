import React, { Component } from 'react';
import Loader from './../Loader/Loader';
import './Grid.css';

class Grid extends Component {
	render() {
		return (
			<div className="mainGrid">
				{this.props.data.length === 0 ? (
					<div className="loaderScreen">
						<Loader />
					</div>
				) : (
					this.props.data.map((el, i) => {
						return (
							<div className="item" key={i.toString()}>
								<img src={el.flag} alt={el.alpha3Code} />
								<p>
									<span className="field">{el.name}</span>
								</p>
								<p className="small">
									<span className="field">Population:</span> {el.population}
								</p>
								<p className="small">
									<span className="field">Region:</span> {el.region}
								</p>
								<p className="small">
									<span className="field">Code:</span> {el.alpha2Code}
								</p>
							</div>
						);
					})
				)}
			</div>
		);
	}
}

export default Grid;
