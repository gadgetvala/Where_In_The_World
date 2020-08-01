import { lightTheme, darkTheme } from './../theme/theme';

export const changeViewReducer = (state = 'card view', action) => {
	switch (action.type) {
		case 'SET_VIEW':
			return action.payload;
		default:
			return state;
	}
};

export const changeThemeReducer = (state = lightTheme, action) => {
	switch (action.type) {
		case 'SET_LIGHT_THEME':
			return lightTheme;
		case 'SET_DARK_THEME':
			return darkTheme;
		default:
			return state;
	}
};
