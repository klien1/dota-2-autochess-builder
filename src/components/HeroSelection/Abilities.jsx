import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';

import heroAbilities from '../../data/abilityData';

export default class Abilities extends Component {
	displayAbilities() {
		const textStyle = {
			color: 'white',
			textShadow: `2px 2px black`
		};
		return _.map(heroAbilities, (value, key) => {
			return (
				<div key={key} style={{ paddingLeft: '1em' }}>
					<Typography style={textStyle} variant='title'>
						{key}
					</Typography>
					<div>
						{_.map(value, (v, k) => {
							return (
								<div key={k} style={{ paddingLeft: '1em' }}>
									<Typography
										style={textStyle}
										variant='title'
										component='p'
										key={k}>{`(${Object.keys(v)[0]}): ${
										Object.values(v)[0]
									}`}</Typography>
								</div>
							);
						})}
					</div>
				</div>
			);
		});
	}

	render() {
		const display = this.displayAbilities();
		return (
			<div>
				{_.map(display, value => {
					return value;
				})}
			</div>
		);
	}
}
