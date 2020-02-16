import React from "react";
import { connect } from "react-redux";

import heroData from "../../data/heroData";
import HeroCardRenderList from "../hero-card/hero-card-render-list.component";

const CurrentRoster = ({ selectedHeroes }) => {
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

const mapStateToProps = ({ selectedHeroes }) => ({
  selectedHeroes
});

export default connect(mapStateToProps)(CurrentRoster);
