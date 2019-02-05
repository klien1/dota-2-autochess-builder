import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import heroData from '../data/heroData';
import { selectHero } from '../redux/actions';

class HeroList extends Component {
	displayHero() {
		if (!heroData || !this.props.images) return null;
		return _.map(heroData, (value, key) => {
			const imageStyle = {
				width: 50,
				height: 50
			};

			if (this.props.selectedHeroes[key]) imageStyle.border = '2px solid green';
			return (
				<div key={key}>
					<img
						onMouseDown={() => this.highlightHero(key)}
						onDragStart={e => e.preventDefault()}
						style={imageStyle}
						src={this.props.images[key]}
						alt={key}
					/>
				</div>
			);
		});
	}

	highlightHero(key) {
		console.log('selecting', key);
		this.props.selectHero(key);
	}

	render() {
		const container = { display: 'flex', justifyContent: 'start' };
		const innerContainer = {
			width: '500px',
			display: 'flex',
			justifyContent: 'space-evenly',
			flexWrap: 'wrap'
		};
		return (
			<div style={container}>
				<div style={innerContainer}>{this.displayHero()}</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		images: state.images,
		selectedHeroes: state.selectedHeroes
	};
};

const mapDispatchToProps = {
	selectHero
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeroList);
