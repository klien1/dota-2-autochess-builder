import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

import CurrentUnitCount from './CurrentUnitCount';
import CurrentRoster from './CurrentRoster';
import CurrentAbilities from './CurrentAbilities';
import { resetSelectedHeroes } from '../../redux/actions';

class RosterWrapper extends Component {
	displayTitle() {
		const titleStyle = {
			color: 'white',
			textShadow: `4px 3px black`
		};
		return (
			<div className='rosterFlexContainer'>
				<div className='rosterFlexTitle'>
					<Typography variant='h4' style={titleStyle}>
						<b>Current Roster</b>
					</Typography>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div>
				{/* {this.displayTitle()} */}
				<CurrentAbilities />
				<CurrentUnitCount />
				<CurrentRoster />
			</div>
		);
	}
}

export default connect(
	null,
	{ resetSelectedHeroes }
)(RosterWrapper);
