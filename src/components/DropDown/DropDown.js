import React from 'react';
import { Container, Menu } from './Style.js';

const DropDown = (props) => {
	return (
		<Container>
			<Menu name="region" id="region" onChange={(e) => props.search(e.target.value)}>
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

export default DropDown;
