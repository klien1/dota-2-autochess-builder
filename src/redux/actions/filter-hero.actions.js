import _ from "lodash";
import { FILTER_HERO } from "../../constants/actionTypes";

import store from "../store";

export const filterData = filter => {
  const { heroData } = store.getState();
  if (!filter || filter.trim().length === 0)
    return {
      type: FILTER_HERO,
      payload: heroData
    };

  const arrayOfFilters = filter.split(" ").filter(item => item.length > 0);
  const fileredData = _.pickBy(heroData, (value, key) => {
    for (let i = arrayOfFilters.length - 1; i >= 0; --i)
      if (checkFilter(arrayOfFilters[i], value, key)) return true;

    return false;
  });

  return {
    type: FILTER_HERO,
    payload: fileredData
  };
};

// helper functions
const checkFilter = (filter, value, key) => {
  if (
    hasString(key, filter) ||
    hasString(value.heroClass, filter) ||
    value.cost.toString() === filter
  )
    return true;

  const raceArray = value.heroRace;
  for (let i = raceArray.length - 1; i >= 0; --i)
    if (hasString(raceArray[i], filter)) return true;
};

const hasString = (string, value) => {
  const lowerCaseString = string.toLowerCase();
  const lowerCaseValue = value.toLowerCase();

  const index = lowerCaseString.indexOf(lowerCaseValue);
  return index >= 0;
};
