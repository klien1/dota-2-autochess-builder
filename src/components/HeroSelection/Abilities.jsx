import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import _ from 'lodash';

import heroAbilities from '../../data/abilityData';
import classIcons from '../../data/classIcons';

export default class Abilities extends Component {
	state = {};

	handleClick = curTarget => {
		this.setState({
			[curTarget]:
				this.state[curTarget] !== undefined ? !this.state[curTarget] : true
		});
	};

	displayAbilityList() {
		if (!heroAbilities || !classIcons) return null;

		const sortedClassArray = _(heroAbilities)
			.keys()
			.sortBy()
			.value();

		return _.map(sortedClassArray, key => {
			return (
				<Grid key={key} item md={4} onClick={() => this.handleClick(key)}>
					<Paper key={key}>
						<ListItem onClick={() => this.handleClick(key)}>
							<Avatar alt={key} src={classIcons[key]} />
							<ListItemText primary={key} />
							{this.state[key] ? <ExpandLess /> : <ExpandMore />}
						</ListItem>
						<Collapse in={this.state[key]} timeout='auto' unmountOnExit>
							{_.map(heroAbilities[key], (v, k) => {
								return (
									<List key={k} component='div' disablePadding>
										<ListItem button>
											<ListItemText
												inset
												primary={`(${Object.keys(v)[0]}): ${
													Object.values(v)[0]
												}`}
											/>
										</ListItem>
									</List>
								);
							})}
						</Collapse>
					</Paper>
				</Grid>
			);
		});
	}

	render() {
		return (
			<Grid
				container
				alignContent='space-between'
				direction='row'
				spacing={40}
				style={{ marginTop: '1em' }}>
				{this.displayAbilityList()}
			</Grid>
		);
	}
}
