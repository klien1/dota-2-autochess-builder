import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';

import HeroSelector from '../HigherOrderedComponents/HeroSelector';
import RenderHeroList from './RenderHeroList';
import { M_HERO_GRID_SIZE } from '../../constants/grid.jsx';

class AlphaHeroes extends Component {
	splitObjectList(size) {
		const { heroData } = this.props;
		const keys = Object.values(heroData);
		let splitArrOfHeroes = [...Array(size)].map(() => Array(0));

		let index = 0;
		for (let i = 0; i < keys.length; ++i) {
			if (index === splitArrOfHeroes.length) index = 0;
			splitArrOfHeroes[index].push(keys[i]);
			++index;
		}

		return splitArrOfHeroes;
	}

	render() {
		const splitArrOfHeroes = this.splitObjectList(4);
		return (
			<Grid container spacing={16}>
				{_.map(splitArrOfHeroes, (values, keys) => {
					return (
						<Grid key={keys} item xs={6} md={M_HERO_GRID_SIZE}>
							<RenderHeroList heroData={values} />
						</Grid>
					);
				})}
			</Grid>
		);
	}
}

export default HeroSelector(AlphaHeroes);
