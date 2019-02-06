import React from 'react';
import { Provider } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import store from '../redux/store';
import CurrentRoster from './CurrentRoster';
import TabBar from './TabBar';

const App = () => {
	return (
		<Provider store={store}>
			<Grid container spacing={24}>
				<Grid item md={8}>
					<TabBar />
				</Grid>
				<Grid item md={4}>
					<CurrentRoster />
				</Grid>
			</Grid>
		</Provider>
	);
};

export default App;
