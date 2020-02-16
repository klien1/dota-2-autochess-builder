import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import _ from "lodash";

import HeroCardRenderList from "../hero-card/hero-card-render-list.component";
import HeroSelector from "../higher-ordered-components/hero-selector.component";
import HeroCardWrapper from "../hero-card/hero-card-wrapper.component";

class AlphaHeroes extends Component {
  splitObjectList(size) {
    const { heroData } = this.props;
    if (!heroData) return null;
    const keys = Object.values(heroData);
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
        {_.map(splitArrOfHeroes, (values, keys) => {
          return (
            <HeroCardWrapper key={keys}>
              <HeroCardRenderList heroData={values} />
            </HeroCardWrapper>
          );
        })}
      </Grid>
    );
  }
}

export default HeroSelector(AlphaHeroes);
