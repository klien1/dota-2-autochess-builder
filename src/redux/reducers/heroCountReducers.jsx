import _ from 'lodash'

import { SELECT_HERO, DESELECT_HERO } from '../../constants/actionTypes'
import * as heroClass from '../../constants/heroClass'
import * as heroRace from '../../constants/heroRace'
import heroData from '../../data/heroData';

const INITIAL_STATE = {}
_.forEach(heroClass, (curClass) => {
  INITIAL_STATE[curClass] = 0;
})

_.forEach(heroRace, (curRace) => {
  INITIAL_STATE[curRace] = 0;
})

const incrementHeroCount = () => {

}

const decrementHeroCount = () => {

}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SELECT_HERO:
    console.log('heroCountReducer', state);
      return state;
    case DESELECT_HERO:
      return state;
    default:
      return state;
  }
}