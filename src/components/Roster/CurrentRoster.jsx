import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import HeroSelector from '../HigherOrderedComponents/HeroSelector';

import heroData from '../../data/heroData';
import RenderHeroCards from '../HeroSelection/RenderHeroCards';
import _ from 'lodash';

class CurrentRoster extends Component {
	filterSelectedHero() {
		const { selectedHeroes } = this.props;

		const filter = {};
		_.forEach(selectedHeroes, value => {
			filter[value] = heroData[value];
		});

		return filter;
	}

	render() {
		return (
			<div>
				<Typography variant='h4' align='center'>
					Current Roster
				</Typography>
				<div style={{ marginTop: '1.5em' }}>
					<RenderHeroCards
						shouldHide={false}
						heroData={this.filterSelectedHero()}
					/>
				</div>
			</div>
		);
	}
}

export default HeroSelector(CurrentRoster);
