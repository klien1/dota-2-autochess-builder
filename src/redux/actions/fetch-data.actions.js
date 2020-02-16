import { FETCH_DATA } from "../../constants/actionTypes";
import heroData from "../../data/heroData";
import abilityData from "../../data/abilityData";

export const fetchData = () => {
  return {
    type: FETCH_DATA,
    payload: {
      heroData,
      abilityData
    }
  };
};
