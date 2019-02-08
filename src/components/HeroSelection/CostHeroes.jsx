import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';

import RenderHeroCards from './RenderHeroCards';
import HeroSelector from '../HigherOrderedComponents/HeroSelector';

class CostHeroes extends Component {
	filterHeroCost(cost) {
		const { heroData } = this.props;
		return _.pickBy(heroData, (value, key) => {
			if (value.cost === cost) return key;
		});
	}

	getDistictHeroCost() {
		const { heroData } = this.props;
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
							<Typography variant='title'>{value}</Typography>
							<RenderHeroCards heroData={this.filterHeroCost(value)} />
						</div>
					);
				})}
			</div>
		);
	}
}

export default HeroSelector(CostHeroes);
