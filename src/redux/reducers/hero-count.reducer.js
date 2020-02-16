import _ from "lodash";
import {
  SELECT_HERO,
  DESELECT_HERO,
  RESET_SELECTED_HERO
} from "../../constants/actionTypes";
import * as heroClass from "../../constants/heroClass";
import * as heroRace from "../../constants/heroRace";

const INITIAL_STATE = {};

// NEED TO EXTRACT FROM HERO DATA
_.forEach(heroClass, curClass => {
  INITIAL_STATE[curClass] = 0;
});

_.forEach(heroRace, curRace => {
  INITIAL_STATE[curRace] = 0;
});

export default (state = INITIAL_STATE, action) => {
  const { classAndRace, numSelectedHeroes } = action;
  switch (action.type) {
    case SELECT_HERO: {
      if (numSelectedHeroes < 10) {
        const newState = { ...state };
        classAndRace.forEach(item => {
          ++newState[item];
        });
        return newState;
      }
      return state;
    }
    case DESELECT_HERO: {
      if (numSelectedHeroes > 0) {
        const newState = { ...state };
        classAndRace.forEach(item => {
          --newState[item];
        });
        return newState;
      }
      return state;
    }
    case RESET_SELECTED_HERO: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
