import {
  OPEN_LIST,
  CLOSE_LIST,
  TOGGLE_LIST
} from "../../constants/actionTypes";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_LIST:
      const openList = { ...state };
      action.payload.forEach(value => {
        openList[value] = true;
      });
      return openList;
    case CLOSE_LIST:
      const closeList = { ...state };
      action.payload.forEach(value => {
        closeList[value] = false;
      });
      return closeList;
    case TOGGLE_LIST:
      const toggleList = { ...state };
      toggleList[action.payload] = !toggleList[action.payload];
      return toggleList;
    default:
      return state;
  }
};
