import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import _ from 'lodash';

import CurrentUnitCount from './CurrentUnitCount';
import CurrentRoster from './CurrentRoster';
import CurrentAbilities from './CurrentAbilities';
import { ACTIVE_ABILITIES, TEAM, CLASS_COUNT } from '../../constants/text';
import RenderTitleCollapseList from '../HeroSelection/renderTitleCollapseList';

class RosterWrapper extends Component {
	render() {
		const heroCount = _.size(this.props.selectedHeroes);
		return (
			<Grid>
				<RenderTitleCollapseList faction={TEAM} counter={heroCount} active>
					<CurrentRoster />
				</RenderTitleCollapseList>
				<RenderTitleCollapseList faction={ACTIVE_ABILITIES} active>
					<CurrentAbilities />
				</RenderTitleCollapseList>
				<RenderTitleCollapseList faction={CLASS_COUNT} active>
					<CurrentUnitCount />
				</RenderTitleCollapseList>
			</Grid>
		);
	}
}

const mapStateToProps = ({ selectedHeroes }) => {
	return {
		selectedHeroes
	};
};

export default connect(mapStateToProps)(RosterWrapper);
