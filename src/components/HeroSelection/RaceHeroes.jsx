import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';

import RenderHeroList from './RenderHeroList';
import HeroSelector from '../HigherOrderedComponents/HeroSelector';
import { M_HERO_GRID_SIZE } from '../../constants/grid.jsx';

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
			.groupBy()
			.sortBy(value => -value.length)
			.flatten()
			.uniq()
			.value();
	}

	render() {
		const distinctRace = this.getDistictHeroRace();
		return (
			<Grid container spacing={16}>
				{_.map(distinctRace, (value, key) => {
					return (
						<Grid key={key} item xs={6} md={M_HERO_GRID_SIZE}>
							<Typography
								style={{ color: 'white', textShadow: '2px 2px black' }}
								variant='title'>
								{value}
							</Typography>
							<RenderHeroList heroData={this.filterHeroRace(value)} />
						</Grid>
					);
				})}
			</Grid>
		);
	}
}

export default HeroSelector(RaceHeroes);

/**
3
4
5
6
7
8
body {
    background: #222;
}
 
#text h1 {
    color: rgba(0,0,0,0.6);
    text-shadow: 2px 2px 3px rgba(255,255,255,0.1);
} */
