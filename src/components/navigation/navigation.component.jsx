import React, { Component } from "react";
import { connect } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";

import HeroListClass from "../hero-list/hero-list-class.component";
import HeroListRace from "../hero-list/hero-list-race.component";
import HeroListCost from "../hero-list/hero-list-cost.component";
import HeroListAlpha from "../hero-list/hero-list-alpha.component";
import SearchArea from "../search/search-area.component";

import { fetchData } from "../../redux/actions";
import { HEROES, CLASS, RACE, COST } from "../../constants/text";
import { PAPER_COLOR } from "../../constants/color";

class Navigation extends Component {
  state = {
    value: 0
  };

  componentDidMount() {
    // addData("heroes", heroData);
    // addData("abilities", abilityData);
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
        {value === 0 && <HeroListAlpha />}
        {value === 1 && <HeroListClass />}
        {value === 2 && <HeroListRace />}
        {value === 3 && <HeroListCost />}
      </div>
    );
  }
}

export default connect(null, { fetchData })(Navigation);
