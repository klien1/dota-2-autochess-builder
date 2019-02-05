import { SELECT_HERO } from '../../constants/actionTypes';
import _ from 'lodash';

export default (state = {}, action) => {
	switch (action.type) {
		case SELECT_HERO:
			const { heroName } = action;
			if (state[heroName]) return _.omit(state, heroName);
			return { ...state, [heroName]: heroName };
		default:
			return state;
	}
};
