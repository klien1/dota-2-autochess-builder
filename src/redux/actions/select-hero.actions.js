import {
  SELECT_HERO,
  DESELECT_HERO,
  RESET_SELECTED_HERO
} from "../../constants/actionTypes";

import store from "../store";

export const selectHero = heroName => ({
  type: SELECT_HERO,
  heroName,
  classAndRace: getClassAndRace(heroName),
  numSelectedHeroes: countSelectedHeroes()
});

export const deselectHero = heroName => ({
  type: DESELECT_HERO,
  heroName,
  classAndRace: getClassAndRace(heroName),
  numSelectedHeroes: countSelectedHeroes()
});

export const resetSelectedHeroes = () => ({
  type: RESET_SELECTED_HERO
});

// helper functions
const getClassAndRace = heroName => {
  const { heroData } = store.getState();
  const curHeroData = heroData[heroName];
  const classAndRace = [curHeroData.heroClass];
  curHeroData.heroRace.forEach(race => {
    classAndRace.push(race);
  });
  return classAndRace;
};

const countSelectedHeroes = () => {
  const { selectedHeroes } = store.getState();
  return Object.keys(selectedHeroes).length;
};
