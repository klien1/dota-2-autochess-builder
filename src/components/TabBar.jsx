import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import ClassHeroes from './HeroSelection/ClassHeroes';
import RaceHeroes from './HeroSelection/RaceHeroes';
import CostHeroes from './HeroSelection/CostHeroes';
import AlphaHeroes from './HeroSelection/AlphaHeroes';
import Abilities from './HeroSelection/Abilities';

class TabBar extends Component {
	state = {
		value: 0
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	renderTabBar() {
		const { value } = this.state;
		return (
			<div>
				<Paper style={{ marginBottom: '1em' }}>
					<Tabs
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

export default TabBar;
