import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import _ from 'lodash';

import images from '../../data/images';
import '../../styles/text.css';

import { selectHero } from '../../redux/actions';
import { connect } from 'react-redux';

class RenderHeroCards extends Component {
	render() {
		const textStyle = {
			padding: '2px',
			backgroundColor: 'black',
			display: 'flex'
		};

		const cardWrapperStyle = {
			display: 'flex',
			flexWrap: 'wrap',
			alignItems: 'center',
			justifyContent: 'center'
		};

		const cardStyle = {
			maxWidth: 80,
			margin: '2px',
			marginTop: '1px',
			padding: '2px'
		};

		const overflowStyle = {
			flex: 1,
			textOverflow: 'ellipsis',
			overflow: 'hidden',
			whiteSpace: 'nowrap'
		};

		const { heroData, selectedHeroes } = this.props;
		if (!heroData || !selectedHeroes) return null;
		return (
			<div style={cardWrapperStyle}>
				{_.map(heroData, (value, key) => {
					return (
						<Card
							key={key}
							style={cardStyle}
							onMouseDown={() => this.props.selectHero(key)}>
							<CardActionArea>
								<CardMedia
									draggable='false'
									height='60'
									component='img'
									alt={key}
									image={images[key]}
									title={key}
								/>
								<div style={textStyle}>
									{value.heroRace.map(item => {
										return (
											<div key={item} className={item} style={overflowStyle}>
												<b>{item}</b>&nbsp;
											</div>
										);
									})}
								</div>
								<div style={{ ...textStyle, paddingTop: 0 }}>
									<div
										className={value.heroClass.replace(' ', '')}
										style={overflowStyle}>
										<b>{value.heroClass}</b>
									</div>
								</div>
							</CardActionArea>
						</Card>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		selectedHeroes: state.selectedHeroes
	};
};

const mapDispatchToProps = {
	selectHero
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RenderHeroCards);
