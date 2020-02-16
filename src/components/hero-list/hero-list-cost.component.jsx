import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import _ from "lodash";

import HeroCardRenderList from "../hero-card/hero-card-render-list.component";
import HeroSelector from "../higher-ordered-components/hero-selector.component";
import HeroCardCollapseTitle from "../hero-card/hero-card-collapse-title.component";
import HeroCardToggleCollapse from "../hero-card/hero-card-toggle-collapse.component";
import HeroCardWrapper from "../hero-card/hero-card-wrapper.component";

class CostHeroes extends Component {
  filterHeroCost(cost) {
    const { heroData } = this.props;
    return _.pickBy(heroData, (value, key) => {
      if (value.cost === cost) return key;
    });
  }

  getDistictHeroCost() {
    const { heroData } = this.props;
    return _.chain(heroData)
      .map("cost")
      .uniq()
      .sort()
      .value();
  }

  render() {
    const distinctCost = this.getDistictHeroCost();
    const splitColumns = this.props.split(distinctCost, this.props.columns);

    const addedName = " cost";
    const renamedDistinctCost = _.map(distinctCost, value => {
      return `${value}${addedName}`;
    });
    return (
      <Grid container spacing={16}>
        <HeroCardToggleCollapse value={renamedDistinctCost} />
        {_.map(splitColumns, value => {
          return (
            <HeroCardWrapper key={value}>
              {_.map(value, curCost => {
                return (
                  <HeroCardCollapseTitle
                    key={curCost}
                    faction={`${curCost}${addedName}`}
                  >
                    <HeroCardRenderList
                      heroData={this.filterHeroCost(curCost)}
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

export default HeroSelector(CostHeroes);
