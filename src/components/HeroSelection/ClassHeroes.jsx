import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';

import RenderTitleCollapseList from './renderTitleCollapseList';
import RenderHeroList from './RenderHeroList';
import HeroSelector from '../HigherOrderedComponents/HeroSelector';
import ToggleAllCollapse from './toggleAllCollapse';
import DisplayHeroWrapper from './displayHeroWrapper';

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
			.sortBy(value => value)
			.flatten()
			.sortedUniq()
			.value();
	}

	render() {
		const uniqHeroClass = this.getDistictHeroClass();
		const splitColumns = this.props.split(uniqHeroClass, this.props.columns);
		return (
			<Grid container spacing={16}>
				<ToggleAllCollapse value={uniqHeroClass} />
				{_.map(splitColumns, (value, key) => {
					return (
						<DisplayHeroWrapper key={key}>
							{_.map(value, curClass => {
								return (
									<RenderTitleCollapseList key={curClass} faction={curClass}>
										<RenderHeroList heroData={this.filterHeroClass(curClass)} />
									</RenderTitleCollapseList>
								);
							})}
						</DisplayHeroWrapper>
					);
				})}
			</Grid>
		);
	}
}

export default HeroSelector(ClassHeroes);
