import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
// import _ from "lodash";

import HeroCardRenderList from "../hero-card/hero-card-render-list.component";
import HeroSelector from "../higher-ordered-components/hero-selector.component";
import HeroCardWrapper from "../hero-card/hero-card-wrapper.component";

class AlphaHeroes extends Component {
  splitObjectList(size) {
    const { filterHeroData } = this.props;
    if (!filterHeroData) return null;
    const keys = Object.values(filterHeroData);
    let splitArrOfHeroes = [...Array(size)].map(() => Array(0));

    let index = 0;
    for (let i = 0; i < keys.length; ++i) {
      if (index === splitArrOfHeroes.length) index = 0;
      splitArrOfHeroes[index].push(keys[i]);
      ++index;
    }

    return splitArrOfHeroes;
  }

  render() {
    const splitArrOfHeroes = this.splitObjectList(this.props.columns);

    return (
      <Grid container spacing={16}>
        {splitArrOfHeroes.map((values, keys) => {
          return (
            <HeroCardWrapper key={keys}>
              <HeroCardRenderList filterHeroData={values} />
            </HeroCardWrapper>
          );
        })}
      </Grid>
    );
  }
}

export default HeroSelector(AlphaHeroes);
