import React, { Component } from 'react';
import _ from 'lodash';
import Typography from '@material-ui/core/Typography';

import heroData from '../../data/heroData';
import RenderHeroCards from './RenderHeroCards';

export default class CostHeroes extends Component {
	filterHeroCost(cost) {
		return _.pickBy(heroData, (value, key) => {
			if (value.cost === cost) return key;
		});
	}

	getDistictHeroCost() {
		return _.chain(heroData)
			.map('cost')
			.uniq()
			.sort()
			.value();
	}

	render() {
		const distinctCost = this.getDistictHeroCost();
		return (
			<div>
				{_.map(distinctCost, value => {
					return (
						<div key={value} style={{ marginTop: '1em' }}>
							<Typography variant='display1'>{value}</Typography>
							<RenderHeroCards heroData={this.filterHeroCost(value)} />
						</div>
					);
				})}
			</div>
		);
	}
}
