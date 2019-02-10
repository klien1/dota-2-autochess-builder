import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import _ from 'lodash';

import { selectHero, deselectHero } from '../../redux/actions';
import classIcon from '../../data/classIcons';
import classData from '../../data/heroIcons';
import RenderAbilityIcon from './renderAbilityIcon';
import { PAPER_COLOR } from '../../constants/color';

class RenderHeroList extends Component {
	static defaultProps = {
		isRosterList: false
	};

	clickHero(heroName) {
		const { selectedHeroes } = this.props;
		if (selectedHeroes[heroName] !== undefined)
			this.props.deselectHero(heroName);
		else this.props.selectHero(heroName);
	}

	renderListItem(value) {
		const { cost, heroClass, heroRace, name } = value;
		const inlineStyle = { marginRight: '2px' };
		if (!value || !this.props.selectedHeroes) return null;

		return (
			<Paper
				key={name}
				onMouseDown={() => this.clickHero(name)}
				style={
					!this.props.isRosterList &&
					this.props.selectedHeroes[name] !== undefined
						? { opacity: 0.5, backgroundColor: PAPER_COLOR }
						: { backgroundColor: PAPER_COLOR }
				}>
				<Button style={{ width: '100%' }}>
					<ListItem>
						<img alt={name} src={classData[name]} title={name} />
						<ListItemText primary={name} secondary={`Cost: ${cost}`} />
						{
							<RenderAbilityIcon
								src={classIcon[heroRace[0]]}
								iconName={heroRace[0]}
								myStyle={inlineStyle}
							/>
						}
						{heroRace.length > 1 ? (
							<RenderAbilityIcon
								src={classIcon[heroRace[1]]}
								iconName={heroRace[1]}
								myStyle={inlineStyle}
							/>
						) : null}
						{
							<RenderAbilityIcon
								src={classIcon[heroClass]}
								iconName={heroClass}
							/>
						}
					</ListItem>
				</Button>
			</Paper>
		);
	}

	render() {
		const { heroData } = this.props;
		return (
			<List dense>
				{_.map(heroData, value => {
					return this.renderListItem(value);
				})}
			</List>
		);
	}
}

const mapStateToProps = state => {
	return {
		selectedHeroes: state.selectedHeroes
	};
};

const mapDispatchToProps = {
	selectHero,
	deselectHero
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RenderHeroList);
