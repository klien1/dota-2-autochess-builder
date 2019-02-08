import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import CardMedia from '@material-ui/core/CardMedia';

import classIcons from '../../data/classIcons';
import rhombus from '../../static/background/diamond.png';
import numbers from '../../data/numbers';

class CurrentUnitCount extends Component {
	render() {
		const { countHeroes } = this.props;
		return (
			<div className='unitCountBoxContainer'>
				{_.map(countHeroes, (value, key) => {
					if (value === 0) return null;
					return (
						<div key={key} className='unitBox'>
							<CardMedia
								draggable='false'
								height='50'
								component='img'
								alt={key}
								image={classIcons[key]}
								title={key}
							/>
							<img src={rhombus} alt='rhombus' className='corner' />
							<img
								src={numbers[`numeric-${value}-black`]}
								alt={value}
								className='corner'
							/>
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
