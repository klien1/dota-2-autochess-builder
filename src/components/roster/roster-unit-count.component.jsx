import React from "react";
import { connect } from "react-redux";
import { Badge, Grid, Paper } from "@material-ui/core";
import { PAPER_COLOR } from "../../constants/color";
import _ from "lodash";
import classIcons from "../../data/classIcons";
import HeroCardAbilityIcon from "../hero-card/hero-card-ability-icon.component";

const CurrentUnitCount = ({ countHeroes }) => {
  return (
    <Paper style={{ backgroundColor: PAPER_COLOR }}>
      <Grid container spacing={16} style={{ margin: "4px" }}>
        {_.map(countHeroes, (value, key) => {
          if (value === 0) return null;
          return (
            <Grid item key={key} style={{ paddingTop: "1em" }}>
              <Badge badgeContent={value} color="primary">
                <HeroCardAbilityIcon src={classIcons[key]} iconName={key} />
              </Badge>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

const mapStateToProps = state => ({
  selectedHeroes: state.selectedHeroes,
  countHeroes: state.countHeroes
});

export default connect(mapStateToProps)(CurrentUnitCount);
