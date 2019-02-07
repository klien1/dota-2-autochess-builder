import { combineReducers } from 'redux';
import selectedHeroes from './selectedHeroReducer';
import countHeroes from './heroCountReducers';

export default combineReducers({
	selectedHeroes,
	countHeroes
});
