import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';

import RenderHeroCards from './RenderHeroCards';
import HeroSelector from '../HigherOrderedComponents/HeroSelector';

class RaceHeroes extends Component {
	filterHeroRace(heroRace) {
		const { heroData } = this.props;
		return _.pickBy(heroData, (value, key) => {
			if (value.heroRace.includes(heroRace)) return key;
		});
	}

	getDistictHeroRace() {
		const { heroData } = this.props;
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

export default HeroSelector(RaceHeroes);
