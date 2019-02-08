import { combineReducers } from 'redux';
import selectedHeroes from './selectedHeroReducer';
import countHeroes from './heroCountReducer';
import heroData from './fetchHeroDataReducer';

export default combineReducers({
	selectedHeroes,
	countHeroes,
	heroData
});
