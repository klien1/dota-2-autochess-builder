import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
// import _ from "lodash";

import RosterUnitCount from "./roster-unit-count.component";
import Roster from "./roster.component";
import RosterAbility from "./roster-ability.component";
import HeroCardCollapseTitle from "../hero-card/hero-card-collapse-title.component";

import { ACTIVE_ABILITIES, TEAM, CLASS_COUNT } from "../../constants/text";

class RosterWrapper extends Component {
  render() {
    // const heroCount = _.size(this.props.selectedHeroes);
    const heroCount = Object.keys(this.props.selectedHeroes).length;
    return (
      <Grid>
        <HeroCardCollapseTitle faction={TEAM} counter={heroCount} active>
          <Roster />
        </HeroCardCollapseTitle>
        <HeroCardCollapseTitle faction={ACTIVE_ABILITIES} active>
          <RosterAbility />
        </HeroCardCollapseTitle>
        <HeroCardCollapseTitle faction={CLASS_COUNT} active>
          <RosterUnitCount />
        </HeroCardCollapseTitle>
      </Grid>
    );
  }
}

const mapStateToProps = ({ selectedHeroes }) => {
  return {
    selectedHeroes
  };
};

export default connect(mapStateToProps)(RosterWrapper);
