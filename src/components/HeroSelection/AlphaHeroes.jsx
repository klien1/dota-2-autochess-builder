import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';

import RenderHeroList from './RenderHeroList';
import HeroSelector from '../HigherOrderedComponents/HeroSelector';
import DisplayHeroWrapper from './displayHeroWrapper';

class AlphaHeroes extends Component {
	splitObjectList(size) {
		const { heroData } = this.props;
		if (!heroData) return null;
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
		const splitArrOfHeroes = this.splitObjectList(this.props.columns);

		return (
			<Grid container spacing={16}>
				{_.map(splitArrOfHeroes, (values, keys) => {
					return (
						<DisplayHeroWrapper key={keys}>
							<RenderHeroList heroData={values} />
						</DisplayHeroWrapper>
					);
				})}
			</Grid>
		);
	}
}

export default HeroSelector(AlphaHeroes);
