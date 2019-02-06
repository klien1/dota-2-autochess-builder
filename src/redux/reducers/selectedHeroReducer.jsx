import { SELECT_HERO } from '../../constants/actionTypes';
import _ from 'lodash';

export default (state = {}, action) => {
	switch (action.type) {
		case SELECT_HERO:
			const { heroName } = action;
			if (state[heroName]) {
				const temp = { ...state };
				delete temp[heroName];
				return temp;
			} else if (_.size(state) < 10) return { ...state, [heroName]: heroName };
			return state;
		default:
			return state;
	}
};
