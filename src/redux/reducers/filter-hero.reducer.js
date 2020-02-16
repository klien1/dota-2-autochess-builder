import { FILTER_HERO, FETCH_DATA } from "../../constants/actionTypes";
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...action.payload.heroData
      };
    case FILTER_HERO:
      return { ...action.payload };
    default:
      return state;
  }
};
