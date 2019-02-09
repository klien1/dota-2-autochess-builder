import React from 'react';
import { Provider } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import store from '../redux/store';
import MainTitle from './MainTitle';
import RosterWrapper from './Roster/RosterWrapper';
import TabBar from './HeroSelection/TabBar';

const App = () => {
	return (
		<Provider store={store}>
			<div className='MainBackground'>
				<div style={{ margin: '0em 3em' }}>
					<MainTitle />
					<Grid container spacing={24}>
						<Grid item md={8} lg={9}>
							<TabBar />
						</Grid>
						<Grid item md={4} lg={3}>
							<RosterWrapper />
						</Grid>
					</Grid>
				</div>
			</div>
		</Provider>
	);
};

export default App;
