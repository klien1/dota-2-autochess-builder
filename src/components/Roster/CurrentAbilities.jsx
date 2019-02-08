import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import _ from 'lodash';

import heroAbilities from '../../data/abilityData';
import { DEMON } from '../../constants/heroRace';
import { OGRE } from '../../constants/heroRace';
import { DWARF } from '../../constants/heroRace';

class CurrentAbilities extends Component {
	generateAbility() {
		const obj = {};

		const { countHeroes } = this.props;
		_.chain(countHeroes)
			.pickBy(val => val > 0)
			.map((value, key) => {
				if (key === DWARF || key === OGRE) return null;
				if (key === DEMON && countHeroes[DEMON] > 1) {
					delete obj[DEMON];
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
						<div className='black-border' key={key}>
							<div className={`${key.replace(' ', '')}`}>
								<Typography align='center' variant='overline' key={key}>
									<b>{`${key}: ${value}`}</b>
								</Typography>
							</div>
						</div>
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
