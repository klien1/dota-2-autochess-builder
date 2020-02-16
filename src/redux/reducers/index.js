import { combineReducers } from "redux";
import selectedHeroes from "./select-hero.reducer";
import countHeroes from "./hero-count.reducer";
import heroData from "./fetch-hero.reducer";
import abilityData from "./fetch-ability.reducer";
import collapseList from "./collapse-list.reducer";
import filterHeroData from "./filter-hero.reducer";

export default combineReducers({
  selectedHeroes,
  countHeroes,
  heroData,
  collapseList,
  abilityData,
  filterHeroData
});
