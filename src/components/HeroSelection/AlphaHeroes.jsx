import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import _ from 'lodash';

import HeroSelector from '../HigherOrderedComponents/HeroSelector';

class AlphaHeroes extends Component {
	gridList() {
		const { heroData, images } = this.props;
		if (!heroData || !images) return null;

		const gridList = {
			justifyContent: 'center'
		};

		return (
			<GridList spacing={10} cellHeight={60} cols={11} style={gridList}>
				{_.map(heroData, (value, key) => {
					const imageStyle = { margin: '3px' };
					if (this.props.selectedHeroes[key])
						imageStyle.backgroundColor = 'cyan';
					return (
						<GridListTile key={key} col={1} style={imageStyle}>
							<img
								onDragStart={e => e.preventDefault()}
								onMouseDown={() => this.props.selectHero(key)}
								src={images[key]}
								alt={key}
							/>
						</GridListTile>
					);
				})}
			</GridList>
		);
	}

	render() {
		const root = {
			marginTop: '2em',
			padding: '1em'
		};
		return <Grid style={root}>{this.gridList()}</Grid>;
	}
}

export default HeroSelector(AlphaHeroes);
