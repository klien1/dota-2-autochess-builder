import { combineReducers } from 'redux';
import selectedHeroes from './selectedHeroReducer';
import countHeroes from './heroCountReducer';
import heroData from './fetchHeroDataReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	selectedHeroes,
	countHeroes,
	heroData,
	form: formReducer
});
