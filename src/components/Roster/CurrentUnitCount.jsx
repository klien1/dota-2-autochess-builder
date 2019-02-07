import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class CurrentUnitCount extends Component {
	render() {
		const { countHeroes } = this.props;
		return (
			<div>
				{_.map(countHeroes, (value, key) => {
					if (value === 0) return null;
					return (
						<div key={key} style={{ backgroundColor: 'white', margin: 0 }}>
							<div
								className={`${key.replace(' ', '')}`}
								key={key}>{`${key}: ${value}`}</div>
						</div>
					);
				})}
			</div>
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
