import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from './../Loader/Loader';
// import { withRouter } from 'react-router-dom';
import { Container, Item, Flag, Detail, Small, Fields, ItemList, FlagList, DataList } from './Style';

class Grid extends Component {
	render() {
		return (
			<Container>
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
								{this.props.view === 'list view' ? (
									<ItemList clickable={true.toString()} theme={this.props.theme}>
										<FlagList src={el.flag} alt={el.alpha3Code} />
										<DataList>
											<p>
												<Fields>{el.name}</Fields>
											</p>
											<p>
												<Small>
													<Fields>Population:</Fields> {el.population}
												</Small>
											</p>
										</DataList>
									</ItemList>
								) : (
									<Item clickable={true.toString()} theme={this.props.theme}>
										<Flag src={el.flag} alt={el.alpha3Code} />
										<Detail>
											<Fields>{el.name}</Fields>
										</Detail>
										<Detail>
											<Small>
												<Fields>Population:</Fields> {el.population}
											</Small>
										</Detail>
										<Detail>
											<Small>
												<Fields>Region:</Fields> {el.region}
											</Small>
										</Detail>
										<Detail>
											<Small>
												<Fields>Code:</Fields> {el.alpha2Code}
											</Small>
										</Detail>
									</Item>
								)}
							</Link>
						);
					})
				)}
			</Container>
		);
	}
}

export default Grid;

/* this.props.data.map((el, i) => {
	return (
		<Link
			to={{ pathname: `/${el.alpha3Code.toLowerCase()}` }}
			key={i.toString()}
			// onClick={() => this.props.history.push(`/${el.alpha3Code.toLowerCase()}`)}
		>
			<Item clickable={true.toString()}>
				<Flag src={el.flag} alt={el.alpha3Code} />
				<Detail>
					<Fields>{el.name}</Fields>
				</Detail>
				<Detail>
					<Small>
						<Fields>Population:</Fields> {el.population}
					</Small>
				</Detail>
				<Detail>
					<Small>
						<Fields>Region:</Fields> {el.region}
					</Small>
				</Detail>
				<Detail>
					<Small>
						<Fields>Code:</Fields> {el.alpha2Code}
					</Small>
				</Detail>
			</Item>
		</Link>
	);
}); */
