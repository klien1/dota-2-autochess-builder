import {
  SELECT_HERO,
  DESELECT_HERO,
  RESET_SELECTED_HERO
} from "../../constants/actionTypes";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  const { classAndRace, numSelectedHeroes } = action;
  switch (action.type) {
    case SELECT_HERO: {
      if (numSelectedHeroes < 10) {
        const newState = { ...state };
        classAndRace.forEach(item => {
          item in newState ? ++newState[item] : (newState[item] = 1);
        });
        return newState;
      }
      return state;
    }
    case DESELECT_HERO: {
      if (numSelectedHeroes > 0) {
        const newState = { ...state };
        classAndRace.forEach(item => {
          if (item in newState) --newState[item];
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
