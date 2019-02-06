import React, { Component } from 'react';
import _ from 'lodash';

import heroData from '../../data/heroData';
import RenderHeroCards from './RenderHeroCards';

class ClassHeroes extends Component {
	filterHeroClass(heroClass) {
		return _.pickBy(heroData, (value, key) => {
			if (value.heroClass === heroClass) return key;
		});
	}

	getDistictHeroClass() {
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
							<RenderHeroCards heroData={this.filterHeroClass(value)} />
						</div>
					);
				})}
			</div>
		);
	}
}

export default ClassHeroes;
