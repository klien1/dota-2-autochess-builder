import React, { Component } from 'react';
import CurrentUnitCount from './CurrentUnitCount';
import CurrentRoster from './CurrentRoster';
import CurrentAbilities from './CurrentAbilities';

export default class RosterWrapper extends Component {
	render() {
		return (
			<div>
				<CurrentRoster />
				<CurrentUnitCount />
				<CurrentAbilities />
			</div>
		);
	}
}
