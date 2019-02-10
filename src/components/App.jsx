import React from 'react';
import { Provider } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import store from '../redux/store';
import MainTitle from './MainTitle';
import RosterWrapper from './Roster/RosterWrapper';
import TabBar from './HeroSelection/TabBar';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
	palette: {
		primary: { main: '#ff4411' },
		secondary: { main: '#90a4ae' }
	},
	typography: {
		useNextVariants: true
	}
});

const App = () => {
	return (
		<Provider store={store}>
			<div className='MainBackground'>
				<MuiThemeProvider theme={theme}>
					<Grid style={{ margin: '0em 3em' }}>
						<MainTitle />
						<Grid container spacing={24}>
							<Grid item md={8} lg={9}>
								<TabBar />
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
