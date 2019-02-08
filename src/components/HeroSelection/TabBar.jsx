import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Refresh from '@material-ui/icons/Refresh';

import ClassHeroes from './ClassHeroes';
import RaceHeroes from './RaceHeroes';
import CostHeroes from './CostHeroes';
import AlphaHeroes from './AlphaHeroes';
import Abilities from './Abilities';

import { fetchData } from '../../redux/actions';
import SearchBar from './SearchBar';

class TabBar extends Component {
	state = {
		value: 0
	};

	componentWillMount() {
		this.props.fetchData();
	}

	handleChange = (event, value) => {
		this.setState({ value });
	};

	renderResetRoster() {
		return (
			<div className='reset'>
				<Fab
					color='primary'
					variant='extended'
					size='small'
					onClick={() => this.props.resetSelectedHeroes()}>
					<Typography variant='button' style={{ color: 'white' }}>
						Reset Roster
					</Typography>
					<Refresh />
				</Fab>
			</div>
		);
	}

	renderTabBar() {
		const { value } = this.state;
		return (
			<div>
				<Paper>
					<div
						style={{
							alignItems: 'center'
						}}>
						<Tabs
							variant='fullWidth'
							value={value}
							onChange={this.handleChange}
							indicatorColor='primary'
							textColor='primary'
							centered>
							<Tab label='Alphabetical' />
							<Tab label='Class' />
							<Tab label='Race' />
							<Tab label='Cost' />
							<Tab label='Abilities' />
						</Tabs>
					</div>
				</Paper>
				<Grid
					justify='space-evenly'
					container
					spacing={16}
					style={{ margin: '5px' }}>
					<Grid item sm={12} md={6}>
						<Paper>
							<SearchBar />
						</Paper>
					</Grid>
					<Grid item>{this.renderResetRoster()}</Grid>
				</Grid>
				{value === 0 && <AlphaHeroes />}
				{value === 1 && <ClassHeroes />}
				{value === 2 && <RaceHeroes />}
				{value === 3 && <CostHeroes />}
				{value === 4 && <Abilities />}
			</div>
		);
	}

	render() {
		return <div>{this.renderTabBar()}</div>;
	}
}

export default connect(
	null,
	{ fetchData }
)(TabBar);
