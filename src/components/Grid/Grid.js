import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from './../Loader/Loader';
// import { withRouter } from 'react-router-dom';
import './Grid.css';

class Grid extends Component {
	render() {
		return (
			<div className="mainGrid">
				{this.props.data.length === 0 ? (
					<Loader />
				) : (
					this.props.data.map((el, i) => {
						return (
							<Link
								to={{ pathname: `/${el.alpha3Code.toLowerCase()}` }}
								key={i.toString()}
								// onClick={() => this.props.history.push(`/${el.alpha3Code.toLowerCase()}`)}
							>
								<div className="item" clickable={true.toString()}>
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
							</Link>
						);
					})
				)}
			</div>
		);
	}
}

export default Grid;
