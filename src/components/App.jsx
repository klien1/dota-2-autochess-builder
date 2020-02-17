import React from "react";
import { Provider } from "react-redux";
import Grid from "@material-ui/core/Grid";

import store from "../redux/store";
import RosterWrapper from "./roster/roster-wrapper.component";
import Navigation from "./navigation/navigation.component";
import { TITLE } from "../constants/text";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: { main: "#ff4411" },
    secondary: { main: "#90a4ae" }
  },
  typography: {
    useNextVariants: true
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <div className="MainBackground">
        <MuiThemeProvider theme={theme}>
          <Grid style={{ margin: "0em 3em" }}>
            <span className="shadow title">{TITLE}</span>
            <Grid container spacing={24}>
              <Grid item md={8} lg={9}>
                <Navigation />
              </Grid>
              <Grid item md={4} lg={3}>
                <RosterWrapper />
              </Grid>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    </Provider>
  );
};

export default App;
