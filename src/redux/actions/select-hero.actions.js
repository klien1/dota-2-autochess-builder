import {
  SELECT_HERO,
  DESELECT_HERO,
  RESET_SELECTED_HERO
} from "../../constants/actionTypes";

import heroData from "../../data/heroData";

const getClassAndRace = heroName => {
  const curHeroData = heroData[heroName];
  const classAndRace = [curHeroData.heroClass];
  curHeroData.heroRace.forEach(race => {
    classAndRace.push(race);
  });
  return classAndRace;
};

export const selectHero = heroName => {
  return {
    type: SELECT_HERO,
    heroName,
    classAndRace: getClassAndRace(heroName)
  };
};

export const deselectHero = heroName => {
  return {
    type: DESELECT_HERO,
    heroName,
    classAndRace: getClassAndRace(heroName)
  };
};

export const resetSelectedHeroes = () => {
  return {
    type: RESET_SELECTED_HERO
  };
};
