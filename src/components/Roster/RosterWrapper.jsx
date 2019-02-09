import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import _ from 'lodash';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';

// import CurrentUnitCount from './CurrentUnitCount';
import CurrentRoster from './CurrentRoster';
import CurrentAbilities from './CurrentAbilities';
import { resetSelectedHeroes } from '../../redux/actions';
import { ACTIVE_ABILITIES, HERO_COUNT } from '../../constants/text';

class RosterWrapper extends Component {
	displayText(text) {
		const titleStyle = {
			color: 'white',
			textShadow: `4px 3px black`
		};

		return (
			<Typography variant='title' style={titleStyle}>
				<b>{text}</b>
			</Typography>
		);
	}

	renderResetRosterButton() {
		return (
			<Button
				variant='contained'
				size='small'
				style={{ backgroundColor: red[600] }}
				onClick={() => this.props.resetSelectedHeroes()}>
				<Typography variant='button' style={{ color: 'white' }}>
					Clear Roster
				</Typography>
			</Button>
		);
	}

	render() {
		const heroCount = _.size(this.props.selectedHeroes);
		return (
			<Grid>
				<Grid container justify='space-around'>
					<Grid item lg={6}>
						{this.displayText(`${HERO_COUNT}: ${heroCount}`)}
					</Grid>
					<Grid item lg={6}>
						{this.renderResetRosterButton()}
					</Grid>
				</Grid>
				<CurrentRoster />
				{this.displayText(ACTIVE_ABILITIES)}
				<CurrentAbilities />
				{/* <CurrentUnitCount /> */}
			</Grid>
		);
	}
}

const mapStateToProps = ({ selectedHeroes }) => {
	return {
		selectedHeroes
	};
};

export default connect(
	mapStateToProps,
	{ resetSelectedHeroes }
)(RosterWrapper);
