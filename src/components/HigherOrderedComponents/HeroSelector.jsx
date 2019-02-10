import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withWidth from '@material-ui/core/withWidth';
import {
	M_HERO_GRID_SIZE,
	L_HERO_GRID_SIZE,
	XL_HERO_GRID_SIZE
} from '../../constants/grid.jsx';

export default ChildComponent => {
	class ComposedComponent extends Component {
		getScreenWidth() {
			switch (this.props.width) {
				case 'md':
					return M_HERO_GRID_SIZE;
				case 'lg':
					return L_HERO_GRID_SIZE;
				case 'xl':
					return XL_HERO_GRID_SIZE;
				default:
					return 12;
			}
		}

		splitBucket(factionArray, size) {
			const arrBuckets = [...Array(size)].map(() => Array(0));

			let index = 0;
			for (let i = 0; i < factionArray.length; ++i) {
				if (index === arrBuckets.length) index = 0;
				arrBuckets[index].push(factionArray[i]);
				++index;
			}

			return arrBuckets;
		}

		render() {
			if (!!!this.props.heroData) return null;
			const width = this.getScreenWidth();
			const numColumn = Math.floor(12 / width);
			return (
				<ChildComponent
					{...this.props}
					columns={numColumn}
					split={this.splitBucket}
				/>
			);
		}
	}

	const mapStateToProps = ({ heroData }) => {
		return { heroData };
	};

	return compose(
		connect(mapStateToProps),
		withWidth()
	)(ComposedComponent);
};
