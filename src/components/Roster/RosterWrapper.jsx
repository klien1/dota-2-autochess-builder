import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Refresh from '@material-ui/icons/Refresh';
import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux';

import CurrentUnitCount from './CurrentUnitCount';
import CurrentRoster from './CurrentRoster';
import CurrentAbilities from './CurrentAbilities';
import { resetSelectedHeroes } from '../../redux/actions';

class RosterWrapper extends Component {
	render() {
		const titleStyle = {
			color: 'white',
			textShadow: '3px 3px black'
		};

		return (
			<div>
				<div className='rosterFlexContainer'>
					<div className='rosterFlexTitle'>
						<Typography variant='h4' style={titleStyle}>
							<b>Current Roster</b>
						</Typography>
					</div>
					<div className='reset'>
						<Fab
							color='primary'
							variant='extended'
							size='small'
							onClick={() => this.props.resetSelectedHeroes()}>
							<Typography variant='button' style={{ color: 'white' }}>
								Reset Roster
							</Typography>
							<Refresh />
						</Fab>
					</div>
				</div>
				<CurrentRoster />
				<CurrentAbilities />
				{/* <CurrentUnitCount /> */}
			</div>
		);
	}
}

export default connect(
	null,
	{ resetSelectedHeroes }
)(RosterWrapper);
