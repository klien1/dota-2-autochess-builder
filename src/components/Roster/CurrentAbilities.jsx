import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import RenderAbilityIcon from '../HeroSelection/renderAbilityIcon';
import heroAbilities from '../../data/abilityData';
import classIcons from '../../data/classIcons';
import { DEMON } from '../../constants/heroRace';
import { OGRE } from '../../constants/heroRace';
import { DWARF } from '../../constants/heroRace';
import { PAPER_COLOR } from '../../constants/color';

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
					if (curKey <= value)
						return (obj[key] = { cost: curKey, effect: ability });
				}
				return null;
			})
			.value();

		return obj;
	}

	render() {
		const abilities = this.generateAbility();
		return (
			<List dense>
				{_.map(abilities, (value, key) => {
					return (
						<Paper key={key} style={{ backgroundColor: PAPER_COLOR }}>
							<ListItem>
								<RenderAbilityIcon src={classIcons[key]} iconName={key} />
								<ListItemText
									primary={`${key} (${value.cost})`}
									secondary={value.effect}
								/>
							</ListItem>
						</Paper>
					);
				})}
			</List>
		);
	}
}

const mapStateToProps = state => {
	return {
		countHeroes: state.countHeroes
	};
};

export default connect(mapStateToProps)(CurrentAbilities);
