import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';

import HeroSelector from '../HigherOrderedComponents/HeroSelector';
import RenderHeroList from './RenderHeroList';
import { L_HERO_GRID_SIZE, XL_HERO_GRID_SIZE } from '../../constants/grid.jsx';

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
			.groupBy()
			.sortBy(value => -value.length)
			.flatten()
			.sortedUniq()
			.value();
	}

	render() {
		const uniqHeroClass = this.getDistictHeroClass();
		return (
			<Grid container spacing={16}>
				{_.map(uniqHeroClass, (value, key) => {
					return (
						<Grid key={key} item lg={L_HERO_GRID_SIZE} xl={XL_HERO_GRID_SIZE}>
							<Typography
								style={{ color: 'white', textShadow: '2px 2px black' }}
								variant='title'>
								{value}
							</Typography>
							<RenderHeroList heroData={this.filterHeroClass(value)} />
						</Grid>
					);
				})}
			</Grid>
		);
	}
}

export default HeroSelector(ClassHeroes);
