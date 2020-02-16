import React from "react";

import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

const searchBar = ({ changeState, searchValue, placeholder }) => {
  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      label={<SearchIcon />}
      variant="outlined"
      onChange={changeState}
      value={searchValue}
    />
  );
};

export default searchBar;
