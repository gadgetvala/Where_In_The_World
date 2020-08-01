export const countriesReducer = (state = [], action) => {
	switch (action.type) {
		case 'FETCH_COUNTRY':
			return action.payload;
		case 'FETCH_COUNTRY_BY_SEARCH':
			return action.payload;
		case 'FETCH_COUNTRY_BY_REGION':
			return action.payload;
		default:
			return state;
	}
};

export const countriesDetailsReducer = (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_COUNTRY_DETAILS':
			return action.payload;
		case 'EMPTY_COUNTRY_DETAIL':
			return {};
		default:
			return state;
	}
};
