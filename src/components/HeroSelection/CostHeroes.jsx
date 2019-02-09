import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';

import RenderHeroList from './RenderHeroList';
import HeroSelector from '../HigherOrderedComponents/HeroSelector';
import { L_HERO_GRID_SIZE, XL_HERO_GRID_SIZE } from '../../constants/grid.jsx';

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
			<Grid container spacing={16}>
				{_.map(distinctCost, value => {
					return (
						<Grid key={value} item lg={L_HERO_GRID_SIZE} xl={XL_HERO_GRID_SIZE}>
							<Typography
								style={{ color: 'white', textShadow: '2px 2px black' }}
								variant='title'>
								{value}
							</Typography>
							<RenderHeroList heroData={this.filterHeroCost(value)} />
						</Grid>
					);
				})}
			</Grid>
		);
	}
}

export default HeroSelector(CostHeroes);
