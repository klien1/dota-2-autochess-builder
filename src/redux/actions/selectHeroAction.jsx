import { SELECT_HERO, DESELECT_HERO } from '../../constants/actionTypes';

export const selectHero = heroName => {
	return {
		type: SELECT_HERO,
		heroName
	};
};

export const deselectHero = heroName => {
	return {
		type: DESELECT_HERO,
		heroName
	}
}