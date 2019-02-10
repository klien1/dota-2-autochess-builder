import React, { Component } from 'react';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';

import RenderHeroList from './RenderHeroList';
import RenderTitleCollapseList from './renderTitleCollapseList';
import HeroSelector from '../HigherOrderedComponents/HeroSelector';
import ToggleAllCollapse from './toggleAllCollapse';

import {
	M_HERO_GRID_SIZE,
	L_HERO_GRID_SIZE,
	XL_HERO_GRID_SIZE
} from '../../constants/grid.jsx';

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
			.sortBy(value => value)
			.flatten()
			.uniq()
			.value();
	}

	render() {
		const distinctRace = this.getDistictHeroRace();
		const splitColumns = this.props.split(distinctRace, this.props.columns);
		return (
			<Grid container spacing={16}>
				<ToggleAllCollapse value={distinctRace} />
				{_.map(splitColumns, (value, key) => {
					return (
						<Grid
							key={key}
							item
							sm={12}
							md={M_HERO_GRID_SIZE}
							lg={L_HERO_GRID_SIZE}
							xl={XL_HERO_GRID_SIZE}>
							{_.map(value, curRace => {
								return (
									<RenderTitleCollapseList key={curRace} faction={curRace}>
										<RenderHeroList heroData={this.filterHeroRace(curRace)} />
									</RenderTitleCollapseList>
								);
							})}
						</Grid>
					);
				})}
			</Grid>
		);
	}
}

export default HeroSelector(RaceHeroes);
