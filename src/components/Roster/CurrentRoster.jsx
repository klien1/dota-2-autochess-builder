import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import heroData from '../../data/heroData';
import RenderHeroCards from '../HeroSelection/RenderHeroCards';

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
			<div style={{ marginTop: '1.5em' }}>
				<RenderHeroCards
					isRosterList={true}
					heroData={this.filterSelectedHero()}
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ selectedHeroes }) => {
	return {
		selectedHeroes
	};
};

export default connect(mapStateToProps)(CurrentRoster);
