import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import ClassHeroes from './ClassHeroes';
import RaceHeroes from './RaceHeroes';
import CostHeroes from './CostHeroes';
import AlphaHeroes from './AlphaHeroes';

import { fetchData } from '../../redux/actions';
import SearchArea from './SearchArea';
import { HEROES, CLASS, RACE, COST } from '../../constants/text';
import { PAPER_COLOR } from '../../constants/color';

class TabBar extends Component {
	state = {
		value: 0
	};

	componentDidMount() {
		this.props.fetchData();
	}

	handleChange = (event, value) => {
		this.setState({ value });
	};

	renderTabBar() {
		const { value } = this.state;
		return (
			<div>
				<Paper style={{ backgroundColor: PAPER_COLOR }}>
					<Tabs
						variant='fullWidth'
						style={{ minWidth: '500px' }}
						value={value}
						onChange={this.handleChange}
						indicatorColor='primary'
						textColor='primary'
						centered>
						<Tab label={HEROES} />
						<Tab label={CLASS} />
						<Tab label={RACE} />
						<Tab label={COST} />
					</Tabs>
				</Paper>
				<SearchArea />
				{value === 0 && <AlphaHeroes />}
				{value === 1 && <ClassHeroes />}
				{value === 2 && <RaceHeroes />}
				{value === 3 && <CostHeroes />}
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
