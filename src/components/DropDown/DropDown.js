import React from 'react';
import { connect } from 'react-redux';
import { setView, setLightTheme, setDarkTheme } from './../../action';
import { Container, Menu } from './Style.js';

const DropDown = (props) => {
	const viewHandler = (view) => {
		props.setView(view);
	};

	const themeHandler = (theme) => {
		theme === 'light' ? props.setLightTheme() : props.setDarkTheme();
	};

	return (
		<Container>
			<Menu name="chnageTheme" onChange={(e) => themeHandler(e.target.value)} margin="1rem 3rem 1rem 1rem" theme={props.theme}>
				<option value="light">Light Theme</option>
				<option value="dark">Dark Theme</option>
			</Menu>

			<Menu name="changeView" onChange={(e) => viewHandler(e.target.value)} margin="1rem 3rem 1rem 1rem" theme={props.theme}>
				<option value="card view">Card View</option>
				<option value="list view">List View</option>
			</Menu>

			<Menu name="region" onChange={(e) => props.search(e.target.value)} margin="1rem 6.3rem 1rem 1rem" theme={props.theme}>
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

const mapStateToProps = (state) => {
	return { theme: state.theme };
};

export default connect(mapStateToProps, { setView, setLightTheme, setDarkTheme })(DropDown);
