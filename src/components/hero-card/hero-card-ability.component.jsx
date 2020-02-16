import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import _ from "lodash";

import { connect } from "react-redux";
import classIcons from "../../data/classIcons";

class HeroCardAbility extends Component {
  state = {};

  handleClick = curTarget => {
    this.setState({
      [curTarget]:
        this.state[curTarget] !== undefined ? !this.state[curTarget] : true
    });
  };

  displayAbilityList() {
    const { abilityData } = this.props;
    if (!abilityData || !classIcons) return null;

    const sortedClassArray = _(abilityData)
      .keys()
      .sortBy()
      .value();

    return _.map(sortedClassArray, key => {
      return (
        <Grid key={key} item md={4} onClick={() => this.handleClick(key)}>
          <Paper key={key}>
            <ListItem onClick={() => this.handleClick(key)}>
              <Avatar alt={key} src={classIcons[key]} />
              <ListItemText primary={key} />
              {this.state[key] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state[key]} timeout="auto" unmountOnExit>
              {_.map(abilityData[key], (v, k) => {
                return (
                  <List key={k} component="div" disablePadding>
                    <ListItem button>
                      <ListItemText
                        inset
                        primary={`(${Object.keys(v)[0]}): ${
                          Object.values(v)[0]
                        }`}
                      />
                    </ListItem>
                  </List>
                );
              })}
            </Collapse>
          </Paper>
        </Grid>
      );
    });
  }

  render() {
    return (
      <Grid
        container
        alignContent="space-between"
        direction="row"
        spacing={40}
        style={{ marginTop: "1em" }}
      >
        {this.displayAbilityList()}
      </Grid>
    );
  }
}

const mapStateToProps = ({ abilityData }) => ({
  abilityData
});

export default connect(mapStateToProps)(HeroCardAbility);
