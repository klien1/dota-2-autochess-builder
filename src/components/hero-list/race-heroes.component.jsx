import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import _ from "lodash";

import RenderHeroList from "../hero-card/hero-card-render-list.component";
import RenderTitleCollapseList from "../hero-card/hero-card-collapse-title.component";
import HeroSelector from "../higher-ordered-components/hero-selector.component";
import ToggleCollapse from "../hero-card/hero-card-toggle-collapse.component";
// import DisplayHeroWrapper from "../hero-grid/hero-grid-wrapper.component";
import HeroCardWrapper from "../hero-card/hero-card-wrapper.component";

class RaceHeroes extends Component {
  filterHeroRace(heroRace) {
    const { heroData } = this.props;
    return _.pickBy(heroData, (value, key) => {
      if (value.heroRace.includes(heroRace)) return key;
    });
  }

  getDistictHeroRace() {
    const { heroData } = this.props;
    return _.chain(heroData)
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
        <ToggleCollapse value={distinctRace} />
        {_.map(splitColumns, (value, key) => {
          return (
            <HeroCardWrapper key={key}>
              {_.map(value, curRace => {
                return (
                  <RenderTitleCollapseList key={curRace} faction={curRace}>
                    <RenderHeroList heroData={this.filterHeroRace(curRace)} />
                  </RenderTitleCollapseList>
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
