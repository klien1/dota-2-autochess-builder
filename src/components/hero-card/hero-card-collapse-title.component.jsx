import React from "react";
import { connect } from "react-redux";
import {
  Badge,
  ListItem,
  ListItemText,
  Paper,
  Grid,
  Collapse
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import classIcons from "../../data/classIcons";
import { PAPER_COLOR } from "../../constants/color";
import { handleCollapse } from "../../redux/actions";
import HeroCardAbilityIcon from "./hero-card-ability-icon.component";

const HeroCardCollapseTitle = props => {
  const {
    collapseList,
    faction,
    handleCollapse,
    children,
    active,
    counter
  } = props;

  const title = (
    <span className="title" style={{ fontSize: "28px" }}>
      {faction}
    </span>
  );
  return (
    <Grid>
      <Paper style={{ backgroundColor: PAPER_COLOR }}>
        <ListItem onClick={() => handleCollapse(faction)}>
          {classIcons[faction] && (
            <HeroCardAbilityIcon src={classIcons[faction]} iconName={faction} />
          )}
          {counter > 0 && (
            <Badge
              badgeContent={counter}
              color="primary"
              style={{ margin: "0px 1em" }}
            />
          )}

          <ListItemText inset={!classIcons[faction]} primary={title} />
          {collapseList[faction] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </Paper>
      <Collapse
        in={active ? !collapseList[faction] : collapseList[faction]}
        timeout="auto"
        unmountOnExit
      >
        {children}
      </Collapse>
    </Grid>
  );
};

const mapStateToProps = ({ collapseList }) => {
  return {
    collapseList
  };
};

export default connect(mapStateToProps, { handleCollapse })(
  HeroCardCollapseTitle
);
