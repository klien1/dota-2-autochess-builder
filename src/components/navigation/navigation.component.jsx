import React, { Component } from "react";
import { connect } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";

import ClassHeroes from "../hero-list/class-heroes.component";
import RaceHeroes from "../hero-list/race-heroes.component";
import CostHeroes from "../hero-list/cost-heroes.component";
import AlphaHeroes from "../hero-list/alpha-heroes.component";
import SearchArea from "../search/search-area.component";

import { fetchData } from "../../redux/actions";
import { HEROES, CLASS, RACE, COST } from "../../constants/text";
import { PAPER_COLOR } from "../../constants/color";

class Navigation extends Component {
  state = {
    value: 0
  };

  componentDidMount() {
    this.props.fetchData();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <Paper style={{ backgroundColor: PAPER_COLOR }}>
          <Tabs
            variant="fullWidth"
            style={{ minWidth: "500px" }}
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label={HEROES} />
            <Tab label={CLASS} />
            <Tab label={RACE} />
            <Tab label={COST} />
          </Tabs>
        </Paper>
        <SearchArea />
        {value === 0 && <AlphaHeroes />}
        {value === 1 && <ClassHeroes />}
        {value === 2 && <RaceHeroes />}
        {value === 3 && <CostHeroes />}
      </div>
    );
  }
}

export default connect(null, { fetchData })(Navigation);
