import React, { Component } from 'react';
import heroAbilities from '../../data/abilityData';
import { connect } from 'react-redux';
import _ from 'lodash';

import Typography from '@material-ui/core/Typography';

class CurrentAbilities extends Component {
	generateAbility() {
		const obj = {};

		const { countHeroes } = this.props;
		_.chain(countHeroes)
			.pickBy(val => val > 0)
			.map((value, key) => {
				if (key === 'Dwarf' || key === 'Ogre') return null;
				if (key === 'Demon' && countHeroes['Demon'] > 1) {
					delete obj['Demon'];
					return null;
				}

				const curHeroAbility = heroAbilities[key]; // arr of [{},{},{}]
				for (let i = curHeroAbility.length - 1; i >= 0; --i) {
					const curKey = Object.keys(curHeroAbility[i])[0];
					const ability = Object.values(curHeroAbility[i])[0];
					if (curKey <= value) return (obj[key] = ability);
				}
				return null;
			})
			.value();

		return obj;
	}

	render() {
		const abilities = this.generateAbility();
		return (
			<div>
				{_.map(abilities, (value, key) => {
					return (
						<Typography variant='h6' key={key}>{`${key}: ${value}`}</Typography>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		countHeroes: state.countHeroes
	};
};

export default connect(mapStateToProps)(CurrentAbilities);
