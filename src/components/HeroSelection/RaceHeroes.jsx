import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';

import heroData from '../../data/heroData';
import RenderHeroCards from './RenderHeroCards';

export default class RaceHeroes extends Component {
	filterHeroRace(heroRace) {
		return _.pickBy(heroData, (value, key) => {
			if (value.heroRace.includes(heroRace)) return key;
		});
	}

	getDistictHeroRace() {
		return _.chain(heroData)
			.map('heroRace')
			.flatten()
			.uniq()
			.value();
	}

	render() {
		const distinctRace = this.getDistictHeroRace();
		return (
			<div>
				{_.map(distinctRace, value => {
					return (
						<div key={value}>
							<Typography variant='title'>{value}</Typography>
							<RenderHeroCards heroData={this.filterHeroRace(value)} />
						</div>
					);
				})}
			</div>
		);
	}
}
