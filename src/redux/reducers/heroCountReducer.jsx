import _ from "lodash";

import {
  SELECT_HERO,
  DESELECT_HERO,
  RESET_SELECTED_HERO
} from "../../constants/actionTypes";
import * as heroClass from "../../constants/heroClass";
import * as heroRace from "../../constants/heroRace";

const INITIAL_STATE = {};

_.forEach(heroClass, curClass => {
  INITIAL_STATE[curClass] = 0;
});

_.forEach(heroRace, curRace => {
  INITIAL_STATE[curRace] = 0;
});

let count = 0;
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_HERO: {
      if (count < 10) {
        ++count;
        const newState = { ...state };
        _.forEach(action.classAndRace, item => {
          ++newState[item];
        });
        return newState;
      }
      return state;
    }
    case DESELECT_HERO: {
      if (count > 0) {
        --count;
        const newState = { ...state };
        action.classAndRace.forEach(item => {
          --newState[item];
        });
        return newState;
      }
      return state;
    }
    case RESET_SELECTED_HERO: {
      count = 0;
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
