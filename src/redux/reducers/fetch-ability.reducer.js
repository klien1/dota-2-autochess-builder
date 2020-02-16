import { FETCH_DATA } from "../../constants/actionTypes";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...action.payload.abilityData
      };
    default:
      return state;
  }
};
