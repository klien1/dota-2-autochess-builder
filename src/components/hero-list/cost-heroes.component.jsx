import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import _ from "lodash";

import RenderHeroList from "../hero-card/hero-card-render-list.component";
import HeroSelector from "../higher-ordered-components/hero-selector.component";
import RenderTitleCollapseList from "../hero-card/hero-card-collapse-title.component";
import ToggleCollapse from "../hero-card/hero-card-toggle-collapse.component";
// import DisplayHeroWrapper from "../hero-grid/hero-grid-wrapper.component";
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
        <ToggleCollapse value={renamedDistinctCost} />
        {_.map(splitColumns, value => {
          return (
            <HeroCardWrapper key={value}>
              {_.map(value, curCost => {
                return (
                  <RenderTitleCollapseList
                    key={curCost}
                    faction={`${curCost}${addedName}`}
                  >
                    <RenderHeroList heroData={this.filterHeroCost(curCost)} />
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

export default HeroSelector(CostHeroes);
