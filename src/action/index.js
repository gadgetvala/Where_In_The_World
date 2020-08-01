import restcountries from './../apis/restcountries';

export const fetchCountry = () => async (dispatch) => {
	const response = await restcountries.get('/all');

	dispatch({ type: 'FETCH_COUNTRY', payload: response.data });
};

export const fetchCountryBySearch = (searchTerm) => async (dispatch) => {
	const response = await restcountries.get(`name/${searchTerm}`);

	dispatch({ type: 'FETCH_COUNTRY_BY_SEARCH', payload: response.data });
};

export const fetchCountryDetails = (countryCode) => async (dispatch) => {
	const response = await restcountries.get(`/alpha/${countryCode}`);

	dispatch({ type: 'FETCH_COUNTRY_DETAILS', payload: response.data });
};

export const fetchCountryByRegion = (region) => async (dispatch) => {
	const response = await restcountries.get(`/region/${region}`);

	dispatch({ type: 'FETCH_COUNTRY_BY_REGION', payload: response.data });
};

export const emptyCountryDetail = () => {
	return {
		type: 'EMPTY_COUNTRY_DETAIL'
	};
};

export const setView = (view) => {
	return {
		type: 'SET_VIEW',
		payload: view
	};
};

export const setLightTheme = () => {
	return {
		type: 'SET_LIGHT_THEME'
	};
};

export const setDarkTheme = () => {
	return {
		type: 'SET_DARK_THEME'
	};
};
