import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import _ from "lodash";

import HeroCardCollapseTitle from "../hero-card/hero-card-collapse-title.component";
import HeroCardRenderList from "../hero-card/hero-card-render-list.component";
import HeroSelector from "../higher-ordered-components/hero-selector.component";
import HeroCardToggleCollapse from "../hero-card/hero-card-toggle-collapse.component";
import HeroCardWrapper from "../hero-card/hero-card-wrapper.component";

class ClassHeroes extends Component {
  state = {};

  filterHeroClass(heroClass) {
    const { heroData } = this.props;

    return _.pickBy(heroData, (value, key) => {
      if (value.heroClass === heroClass) return key;
    });
  }

  getDistictHeroClass() {
    const { heroData } = this.props;
    return _.chain(heroData)
      .map("heroClass")
      .groupBy()
      .sortBy(value => value)
      .flatten()
      .sortedUniq()
      .value();
  }

  render() {
    const uniqHeroClass = this.getDistictHeroClass();
    const splitColumns = this.props.split(uniqHeroClass, this.props.columns);
    return (
      <Grid container spacing={16}>
        <HeroCardToggleCollapse value={uniqHeroClass} />
        {_.map(splitColumns, (value, key) => {
          return (
            <HeroCardWrapper key={key}>
              {_.map(value, curClass => {
                return (
                  <HeroCardCollapseTitle key={curClass} faction={curClass}>
                    <HeroCardRenderList
                      heroData={this.filterHeroClass(curClass)}
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

export default HeroSelector(ClassHeroes);
