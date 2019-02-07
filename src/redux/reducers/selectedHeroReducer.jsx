import { SELECT_HERO, DESELECT_HERO } from '../../constants/actionTypes';
import _ from 'lodash';

export default (state = {}, action) => {
	switch (action.type) {
		case SELECT_HERO:
			const { heroName } = action;
			if (_.size(state) < 10) return { ...state, [heroName]: heroName };
			return state;
		case DESELECT_HERO:
			const temp = { ...state };
			delete temp[action.heroName];
			return temp;
		default:
			return state;
	}
};
