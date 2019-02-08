import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import test from '../../static/miniHeroIcons/Axe.png';
import classIcon from '../../static/classAndRace/Warrior.png';

const temp = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default class RenderHeroList extends Component {
	renderList() {
		return (
			// <Grid container spacing={16}>
			<Grid item xs={12} md={10}>
				<Typography variant='h6'>Warriors</Typography>
				<List dense>{temp.map(() => this.renderListItem())}</List>
			</Grid>
			// </Grid>
		);
	}

	renderListItem() {
		return (
			<Paper>
				<ListItem>
					<ListItemAvatar>
						<Avatar alt='axe' src={test} />
					</ListItemAvatar>
					<ListItemText primary='Some random text' secondary='subtext' />
					<ListItemIcon>
						<Avatar alt='war' src={classIcon} />
						&nbsp;
						<Avatar alt='war' src={classIcon} />
						&nbsp;
						<Avatar alt='war' src={classIcon} />
						&nbsp;
					</ListItemIcon>
				</ListItem>
			</Paper>
		);
	}

	render() {
		const flexItem = {
			flex: 1
		};
		return (
			<Grid container spacing={24}>
				<div style={flexItem}>{this.renderList()}</div>
				<div style={flexItem}>{this.renderList()}</div>
				<div style={flexItem}>{this.renderList()}</div>
			</Grid>
		);
	}
}
