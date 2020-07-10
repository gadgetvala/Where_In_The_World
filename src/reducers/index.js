import { combineReducers } from 'redux';

const countriesReducer = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_COUNTRY':
			return action.payload;
		case 'FETCH_COUNTRY_BY_SEARCH':
			return action.payload;
		default:
			return state;
	}
};

const countriesDetailsReducer = (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_COUNTRY_DETAILS':
			return action.payload;
		default:
			return state;
	}
};

export default combineReducers({
	countries: countriesReducer,
	countryDetail: countriesDetailsReducer
});
