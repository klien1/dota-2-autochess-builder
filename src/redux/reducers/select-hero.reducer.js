import {
  SELECT_HERO,
  DESELECT_HERO,
  RESET_SELECTED_HERO
} from "../../constants/actionTypes";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_HERO:
      const { heroName, numSelectedHeroes } = action;
      if (numSelectedHeroes < 10) return { ...state, [heroName]: heroName };
      return state;
    case DESELECT_HERO:
      const temp = { ...state };
      delete temp[action.heroName];
      return temp;
    case RESET_SELECTED_HERO:
      return INITIAL_STATE;
    default:
      return state;
  }
};
