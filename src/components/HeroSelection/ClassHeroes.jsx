import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';

import RenderHeroCards from './RenderHeroCards';
import HeroSelector from '../HigherOrderedComponents/HeroSelector';

class ClassHeroes extends Component {
	filterHeroClass(heroClass) {
		const { heroData } = this.props;
		return _.pickBy(heroData, (value, key) => {
			if (value.heroClass === heroClass) return key;
		});
	}

	getDistictHeroClass() {
		const { heroData } = this.props;
		return _.chain(heroData)
			.map('heroClass')
			.uniq()
			.value();
	}

	render() {
		const uniqHeroClass = this.getDistictHeroClass();
		return (
			<div>
				{_.map(uniqHeroClass, value => {
					return (
						<div key={value}>
							<Typography variant='title'>{value}</Typography>
							<RenderHeroCards heroData={this.filterHeroClass(value)} />
						</div>
					);
				})}
			</div>
		);
	}
}

export default HeroSelector(ClassHeroes);
