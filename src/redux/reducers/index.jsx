import { combineReducers } from 'redux';
import selectedHeroes from './selectedHeroReducer';
import countHeroes from './heroCountReducer';

export default combineReducers({
	selectedHeroes,
	countHeroes
});
