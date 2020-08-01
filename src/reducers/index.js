import { combineReducers } from 'redux';

// Import Reducers
import { countriesReducer, countriesDetailsReducer } from './countryReducers';
import { changeViewReducer, changeThemeReducer } from './customizationReducers';

export default combineReducers({
	countries: countriesReducer,
	countryDetail: countriesDetailsReducer,
	view: changeViewReducer,
	theme: changeThemeReducer
});
