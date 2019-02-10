import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';

import {
	M_HERO_GRID_SIZE,
	L_HERO_GRID_SIZE,
	XL_HERO_GRID_SIZE
} from '../../constants/grid.jsx';
import RenderTitleCollapseList from './renderTitleCollapseList';
import RenderHeroList from './RenderHeroList';
import HeroSelector from '../HigherOrderedComponents/HeroSelector';
import ToggleAllCollapse from './toggleAllCollapse';

class ClassHeroes extends Component {
	state = {};

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
				{/* <Grid item xs={12} s={12} md={12} lg={12} xl={12}>
					<button onClick={() => this.props.closeList(uniqHeroClass)}>
						close all
					</button>
					<button onClick={() => this.props.openList(uniqHeroClass)}>
						open all
					</button>
				</Grid> */}
				<ToggleAllCollapse value={uniqHeroClass} />
				{_.map(uniqHeroClass, (value, key) => {
					return (
						<Grid
							key={key}
							item
							sm={12}
							md={M_HERO_GRID_SIZE}
							lg={L_HERO_GRID_SIZE}
							xl={XL_HERO_GRID_SIZE}>
							<RenderTitleCollapseList faction={value}>
								<RenderHeroList heroData={this.filterHeroClass(value)} />
							</RenderTitleCollapseList>
						</Grid>
					);
				})}
			</Grid>
		);
	}
}

export default HeroSelector(ClassHeroes);
