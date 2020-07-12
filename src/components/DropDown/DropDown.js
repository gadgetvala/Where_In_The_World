import React from 'react';
import './DropDown.css';

const DropDown = (props) => {
	return (
		<div className="dropDown">
			<select name="region" id="region" onChange={(e) => props.search(e.target.value)}>
				<option value="">Filter By Region</option>
				<option value="africa">Africa</option>
				<option value="americas">Americas</option>
				<option value="asia">Asia</option>
				<option value="europe">Europe</option>
				<option value="oceania">Oceania</option>
			</select>
		</div>
	);
};

export default DropDown;
