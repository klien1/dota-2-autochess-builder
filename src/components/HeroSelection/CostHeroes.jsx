import React, { Component } from 'react';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';

import RenderHeroList from './RenderHeroList';
import HeroSelector from '../HigherOrderedComponents/HeroSelector';
import RenderTitleCollapseList from './renderTitleCollapseList';
import ToggleAllCollapse from './toggleAllCollapse';
import {
	M_HERO_GRID_SIZE,
	L_HERO_GRID_SIZE,
	XL_HERO_GRID_SIZE
} from '../../constants/grid.jsx';

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
		const splitColumns = this.props.split(distinctCost, this.props.columns);

		const addedName = ' cost';
		const renamedDistinctCost = _.map(distinctCost, value => {
			return `${value}${addedName}`;
		});
		return (
			<Grid container spacing={16}>
				<ToggleAllCollapse value={renamedDistinctCost} />
				{_.map(splitColumns, value => {
					return (
						<Grid
							key={value}
							item
							sm={12}
							md={M_HERO_GRID_SIZE}
							lg={L_HERO_GRID_SIZE}
							xl={XL_HERO_GRID_SIZE}>
							{_.map(value, curCost => {
								return (
									<RenderTitleCollapseList
										key={curCost}
										faction={`${curCost}${addedName}`}>
										<RenderHeroList heroData={this.filterHeroCost(curCost)} />
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

export default HeroSelector(CostHeroes);
