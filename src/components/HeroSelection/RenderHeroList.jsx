import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import _ from 'lodash';

import classIcon from '../../data/classIcons';
import classData from '../../data/heroIcons';
import { selectHero, deselectHero } from '../../redux/actions';

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

	renderIcon(src, title, style = {}) {
		return <Avatar alt={title} src={src} title={title} style={style} />;
	}

	renderListItem(value) {
		const { cost, heroClass, heroRace, name } = value;
		const inlineStyle = { marginRight: '2px' };
		if (!value || !this.props.selectedHeroes) return null;

		return (
			<div key={name} onMouseDown={() => this.clickHero(name)}>
				<Paper
					style={
						!this.props.isRosterList &&
						this.props.selectedHeroes[name] !== undefined
							? { opacity: 0.5 }
							: {}
					}>
					<ListItem>
						{this.renderIcon(classData[name], name)}
						<ListItemText primary={name} secondary={`Cost: ${cost}`} />
						{this.renderIcon(classIcon[heroRace[0]], heroRace[0], inlineStyle)}
						{heroRace.length > 1
							? this.renderIcon(
									classIcon[heroRace[1]],
									heroRace[1],
									inlineStyle
							  )
							: null}
						{this.renderIcon(classIcon[heroClass], heroClass)}
					</ListItem>
				</Paper>
			</div>
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
