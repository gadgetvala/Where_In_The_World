import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TopBar, Brand, SearchBar, SearchInput } from './Style.js';

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
		<TopBar>
			<Link to="/">
				<Brand>Where in the world ?</Brand>
			</Link>
			{props.searchBar === true ? (
				<SearchBar>
					<SearchInput
						className="search"
						type="text"
						id="search"
						placeholder="Search"
						onChange={_doSearch}
						value={value}
					/>
				</SearchBar>
			) : null}
		</TopBar>
	);
};

export default Appbar;
