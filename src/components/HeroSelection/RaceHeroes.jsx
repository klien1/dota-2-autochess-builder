import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';

import RenderHeroList from './RenderHeroList';
import RenderTitleCollapseList from './renderTitleCollapseList';
import HeroSelector from '../HigherOrderedComponents/HeroSelector';
import ToggleAllCollapse from './toggleAllCollapse';
import DisplayHeroWrapper from './displayHeroWrapper';

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
						<DisplayHeroWrapper key={key}>
							{_.map(value, curRace => {
								return (
									<RenderTitleCollapseList key={curRace} faction={curRace}>
										<RenderHeroList heroData={this.filterHeroRace(curRace)} />
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

export default HeroSelector(RaceHeroes);
