import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";

import { connect } from "react-redux";

const HeroCardAbilityIcon = ({ src, iconName, myStyle = {}, abilityData }) => {
  if (!abilityData[iconName]) return null;
  const description = (
    <Grid>
      <Typography variant="subtitle1" style={{ color: "white" }}>
        <b>{iconName}</b>
      </Typography>
      {abilityData[iconName].map(value => {
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
