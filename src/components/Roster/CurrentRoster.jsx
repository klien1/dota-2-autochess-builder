import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import heroData from '../../data/heroData';
import RenderHeroList from '../HeroSelection/RenderHeroList';

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
		return <RenderHeroList isRosterList heroData={this.filterSelectedHero()} />;
	}
}

const mapStateToProps = ({ selectedHeroes }) => {
	return {
		selectedHeroes
	};
};

export default connect(mapStateToProps)(CurrentRoster);
