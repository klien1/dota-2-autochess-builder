import React from "react";
import { connect } from "react-redux";

import HeroCardRenderList from "../hero-card/hero-card-render-list.component";

const CurrentRoster = ({ selectedHeroes, heroData }) => {
  const filterSelectedHero = () => {
    const filter = {};
    for (const key in selectedHeroes) {
      const value = selectedHeroes[key];
      filter[value] = heroData[value];
    }

    return filter;
  };

  return <HeroCardRenderList isRosterList heroData={filterSelectedHero()} />;
};

const mapStateToProps = ({ selectedHeroes, heroData }) => ({
  selectedHeroes,
  heroData
});

export default connect(mapStateToProps)(CurrentRoster);
