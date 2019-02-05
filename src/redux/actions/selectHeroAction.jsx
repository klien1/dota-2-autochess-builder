import { SELECT_HERO } from '../../constants/actionTypes';

export const selectHero = heroName => {
	return {
		type: SELECT_HERO,
		heroName
	};
};
