import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Appbar.css';

const Appbar = (props) => {
	const [value, setValue] = useState('');

	let timeout = null;

	let _doSearch = (event) => {
		setValue(event.target.value);
		clearTimeout(timeout);

		timeout = setTimeout(() => {
			props.search(value);
		});
	};

	return (
		<div className="appbar">
			<Link to="/">
				<h1 className="brand">Where in the world ?</h1>
			</Link>
			{props.searchBar === true ? (
				<div className="searchBar">
					<input
						className="search"
						type="text"
						id="search"
						placeholder="Search"
						onChange={_doSearch}
						value={value}
					/>
				</div>
			) : null}
		</div>
	);
};

export default Appbar;
