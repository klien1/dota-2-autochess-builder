import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

import SearchBar from "./search-bar.component";
import { CLEAR_SEARCH, CLEAR_TEAM, SEARCH } from "../../constants/text";
import {
  SEARCH_COLOR,
  PAPER_COLOR,
  CLEAR_SEARCH_COLOR,
  CLEAR_TEAM_COLOR
} from "../../constants/color";
import { resetSelectedHeroes, filterData } from "../../redux/actions";

class SearchArea extends Component {
  state = {
    searchValue: ""
  };

  resetSearch = () => {
    this.props.filterData("");
    this.setState({ searchValue: "" });
  };

  submitSearch = event => {
    event.preventDefault();
    this.startSearch();
  };

  startSearch = () => {
    this.props.filterData(this.state.searchValue);
  };

  onSearchChange = event => {
    const { value } = event.target;
    this.setState({
      searchValue: value
    });
  };

  renderButton(text, onClick, color, size = "large") {
    return (
      <Button
        size={size}
        onClick={onClick}
        style={{ backgroundColor: color }}
        variant="contained"
      >
        <Typography variant="button" style={{ color: "white" }}>
          {text}
        </Typography>
      </Button>
    );
  }

  render() {
    const placeholder = "Search by hero name or class or race. e.g. razor";
    return (
      <Grid
        justify="space-between"
        alignItems="center"
        alignContent="center"
        container
        style={{ marginTop: "5px" }}
        spacing={16}
      >
        <Grid item xs={12} sm={12} md={12} lg={6} xl={8}>
          <Paper style={{ backgroundColor: PAPER_COLOR }}>
            <form onSubmit={this.submitSearch}>
              <SearchBar
                changeState={this.onSearchChange}
                searchValue={this.state.searchValue}
                placeholder={placeholder}
              />
            </form>
          </Paper>
        </Grid>
        <Grid
          item
          md={12}
          lg={6}
          xl={4}
          spacing={8}
          container
          justify="space-between"
          wrap="nowrap"
          alignContent="center"
        >
          <Grid item>
            {this.renderButton(SEARCH, () => this.startSearch(), SEARCH_COLOR)}
          </Grid>
          <Grid item>
            {this.renderButton(
              CLEAR_SEARCH,
              () => this.resetSearch(),
              CLEAR_SEARCH_COLOR
            )}
          </Grid>
          <Grid item>
            {this.renderButton(
              CLEAR_TEAM,
              () => this.props.resetSelectedHeroes(),
              CLEAR_TEAM_COLOR
            )}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default connect(null, { resetSelectedHeroes, filterData })(SearchArea);
