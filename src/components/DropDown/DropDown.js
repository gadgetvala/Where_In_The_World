import React from 'react';
import { connect } from 'react-redux';
import { setView } from './../../action';
import { Container, Menu } from './Style.js';

const DropDown = (props) => {
	const viewHandler = (view) => {
		props.setView(view);
	};

	return (
		<Container>
			<Menu
				name="changeView"
				id="changeView"
				onChange={(e) => viewHandler(e.target.value)}
				margin="1rem 3rem 1rem 1rem"
			>
				<option value="card view">Card View</option>
				<option value="list view">List View</option>
			</Menu>

			<Menu
				name="region"
				id="region"
				onChange={(e) => props.search(e.target.value)}
				margin="1rem 6.3rem 1rem 1rem"
			>
				<option value="">Filter By Region</option>
				<option value="africa">Africa</option>
				<option value="americas">Americas</option>
				<option value="asia">Asia</option>
				<option value="europe">Europe</option>
				<option value="oceania">Oceania</option>
			</Menu>
		</Container>
	);
};

export default connect(null, { setView })(DropDown);
