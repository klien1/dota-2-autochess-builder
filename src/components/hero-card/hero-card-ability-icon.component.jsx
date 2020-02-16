import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import _ from "lodash";

import { connect } from "react-redux";
// import abilityData from "../../data/abilityData";

const HeroCardAbilityIcon = ({ src, iconName, myStyle = {}, abilityData }) => {
  if (!abilityData[iconName]) return null;
  const description = (
    <Grid>
      <Typography variant="subtitle1" style={{ color: "white" }}>
        <b>{iconName}</b>
      </Typography>
      {_.map(abilityData[iconName], value => {
        const curKey = Object.keys(value)[0];
        const curAbility = value[curKey];
        if (!curKey || !curAbility) return null;
        return (
          <p
            style={{ fontSize: "14px" }}
            key={`${iconName}-${curKey}`}
          >{`(${curKey}): ${curAbility}`}</p>
        );
      })}
    </Grid>
  );

  return (
    <Tooltip title={description}>
      <Avatar alt={iconName} src={src} style={myStyle} />
    </Tooltip>
  );
};

const mapStateToProps = ({ abilityData }) => ({
  abilityData
});

export default connect(mapStateToProps)(HeroCardAbilityIcon);
