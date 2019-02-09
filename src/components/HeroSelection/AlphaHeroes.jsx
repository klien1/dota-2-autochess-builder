import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';
import withWidth from '@material-ui/core/withWidth';
import { compose } from 'redux';
import { connect } from 'react-redux';

import RenderHeroList from './RenderHeroList';
import {
	M_HERO_GRID_SIZE,
	L_HERO_GRID_SIZE,
	XL_HERO_GRID_SIZE
} from '../../constants/grid.jsx';

class AlphaHeroes extends Component {
	splitObjectList(size) {
		const { heroData } = this.props;
		if (!heroData) return null;
		const keys = Object.values(heroData);
		let splitArrOfHeroes = [...Array(size)].map(() => Array(0));

		let index = 0;
		for (let i = 0; i < keys.length; ++i) {
			if (index === splitArrOfHeroes.length) index = 0;
			splitArrOfHeroes[index].push(keys[i]);
			++index;
		}

		return splitArrOfHeroes;
	}

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

	render() {
		const width = this.getScreenWidth();
		const splitArrOfHeroes = this.splitObjectList(Math.floor(12 / width));

		return (
			<Grid container spacing={16}>
				{_.map(splitArrOfHeroes, (values, keys) => {
					return (
						<Grid
							key={keys}
							item
							sm={12}
							md={M_HERO_GRID_SIZE}
							lg={L_HERO_GRID_SIZE}
							xl={XL_HERO_GRID_SIZE}>
							<RenderHeroList heroData={values} />
						</Grid>
					);
				})}
			</Grid>
		);
	}
}

const mapStateToProps = ({ heroData }) => {
	return { heroData };
};

export default compose(
	withWidth(),
	connect(mapStateToProps)
)(AlphaHeroes);
