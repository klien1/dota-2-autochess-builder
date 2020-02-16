import React from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

import RosterUnitCount from "./roster-unit-count.component";
import Roster from "./roster.component";
import RosterAbility from "./roster-ability.component";
import HeroCardCollapseTitle from "../hero-card/hero-card-collapse-title.component";

import { ACTIVE_ABILITIES, TEAM, CLASS_COUNT } from "../../constants/text";

const RosterWrapper = ({ selectedHeroes }) => {
  const heroCount = Object.keys(selectedHeroes).length;
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
};

const mapStateToProps = ({ selectedHeroes }) => ({
  selectedHeroes
});

export default connect(mapStateToProps)(RosterWrapper);
