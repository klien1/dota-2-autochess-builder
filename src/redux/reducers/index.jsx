import { combineReducers } from "redux";
import selectedHeroes from "./selectedHeroReducer";
import countHeroes from "./heroCountReducer";
import heroData from "./fetchHeroDataReducer";
import collapseList from "./collapseListReducer";

export default combineReducers({
  selectedHeroes,
  countHeroes,
  heroData,
  collapseList
});
