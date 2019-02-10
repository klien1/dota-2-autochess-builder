import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Badge, Grid } from '@material-ui/core';

import classIcons from '../../data/classIcons';
import RenderAbilityIcon from '../HeroSelection/renderAbilityIcon';

class CurrentUnitCount extends Component {
	render() {
		const { countHeroes } = this.props;
		return (
			<Grid container spacing={16} style={{ margin: '1em' }}>
				{_.map(countHeroes, (value, key) => {
					if (value === 0) return null;
					return (
						<Grid item key={key}>
							<Badge badgeContent={value} color='primary'>
								<RenderAbilityIcon src={classIcons[key]} iconName={key} />
							</Badge>
						</Grid>
					);
				})}
			</Grid>
		);
	}
}

const mapStateToProps = state => {
	return {
		selectedHeroes: state.selectedHeroes,
		countHeroes: state.countHeroes
	};
};

export default connect(mapStateToProps)(CurrentUnitCount);
