import React from "react";
import { Grid } from "@material-ui/core";
import {
  M_HERO_GRID_SIZE,
  L_HERO_GRID_SIZE,
  XL_HERO_GRID_SIZE
} from "../../constants/grid.jsx";

const HeroCardWrapper = ({ children, uniqKey }) => {
  return (
    <Grid
      key={uniqKey}
      item
      xs={12}
      sm={12}
      md={M_HERO_GRID_SIZE}
      lg={L_HERO_GRID_SIZE}
      xl={XL_HERO_GRID_SIZE}
    >
      {children}
    </Grid>
  );
};

export default HeroCardWrapper;
