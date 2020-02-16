import {
  OPEN_LIST,
  CLOSE_LIST,
  TOGGLE_LIST
} from "../../constants/actionTypes";

export const openList = heroNames => {
  return {
    type: OPEN_LIST,
    payload: heroNames
  };
};

export const closeList = heroNames => {
  return {
    type: CLOSE_LIST,
    payload: heroNames
  };
};

export const handleCollapse = heroNames => {
  return {
    type: TOGGLE_LIST,
    payload: heroNames
  };
};
