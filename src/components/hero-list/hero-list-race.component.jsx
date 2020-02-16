import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import _ from "lodash";

import HeroCardRenderList from "../hero-card/hero-card-render-list.component";
import HeroCardCollapseTitle from "../hero-card/hero-card-collapse-title.component";
import HeroSelector from "../higher-ordered-components/hero-selector.component";
import HeroCardToggleCollapse from "../hero-card/hero-card-toggle-collapse.component";
import HeroCardWrapper from "../hero-card/hero-card-wrapper.component";

class RaceHeroes extends Component {
  filterHeroRace(heroRace) {
    const { filterHeroData } = this.props;
    return _.pickBy(filterHeroData, (value, key) => {
      if (value.heroRace.includes(heroRace)) return key;
    });
  }

  getDistictHeroRace() {
    const { filterHeroData } = this.props;
    return _.chain(filterHeroData)
      .map("heroRace")
      .flatten()
      .groupBy()
      .sortBy(value => value)
      .flatten()
      .uniq()
      .value();
  }

  render() {
    const distinctRace = this.getDistictHeroRace();
    const splitColumns = this.props.split(distinctRace, this.props.columns);
    return (
      <Grid container spacing={16}>
        <HeroCardToggleCollapse value={distinctRace} />
        {_.map(splitColumns, (value, key) => {
          return (
            <HeroCardWrapper key={key}>
              {_.map(value, curRace => {
                return (
                  <HeroCardCollapseTitle key={curRace} faction={curRace}>
                    <HeroCardRenderList
                      filterHeroData={this.filterHeroRace(curRace)}
                    />
                  </HeroCardCollapseTitle>
                );
              })}
            </HeroCardWrapper>
          );
        })}
      </Grid>
    );
  }
}

export default HeroSelector(RaceHeroes);
