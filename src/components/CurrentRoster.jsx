import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import HeroSelector from './HigherOrderedComponents/HeroSelector';
import Grid from '@material-ui/core/Grid';

import '../styles/wrapper.css';
import heroData from '../data/heroData';
import RenderHeroCards from './HeroSelection/RenderHeroCards';
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
			<div style={{ marginRight: '2em', marginTop: '1em' }}>
				<Typography variant='h4' align='center'>
					Current Roster
				</Typography>
				<Grid style={{ marginTop: '1em' }}>
					<div className='heroWrapper'>
						<RenderHeroCards heroData={this.filterSelectedHero()} />
					</div>
				</Grid>
			</div>
		);
	}
}

export default HeroSelector(CurrentRoster);
