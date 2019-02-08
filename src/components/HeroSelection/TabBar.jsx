import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

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

	renderTabBar() {
		const { value } = this.state;
		return (
			<div>
				<Paper style={{ marginBottom: '1em' }}>
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
						<SearchBar />
					</div>
				</Paper>
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
