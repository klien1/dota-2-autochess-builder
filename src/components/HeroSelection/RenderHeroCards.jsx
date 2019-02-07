import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { connect } from 'react-redux';
import _ from 'lodash';

import images from '../../data/images';
import '../../styles/text.css';
import '../../styles/hero.css';
import { selectHero, deselectHero } from '../../redux/actions';
import rhombus from '../../static/background/rhombus.png';
import numbers from '../../data/numbers';

class RenderHeroCards extends Component {
	static defaultProps = {
		shouldHide: true
	};

	clickHero(heroName) {
		const { selectedHeroes } = this.props;
		if (selectedHeroes[heroName] !== undefined)
			this.props.deselectHero(heroName)
		else
			this.props.selectHero(heroName)

	}

	createCards() {
		const { heroData, selectedHeroes, shouldHide } = this.props;
		if (!heroData || !selectedHeroes) return null;

		const corner = {
			position: 'absolute',
			top: '0px',
			left: '0px',
			padding: '0',
			maxWidth: '50%',
			maxHeight: '50%'
		};

		return _.map(heroData, (value, key) => {
			return (
				<Card
					style={
						shouldHide && selectedHeroes[key] !== undefined
							? { opacity: 0.5 }
							: {}
					}
					key={key}
					className='cardStyle'
					onMouseDown={() => this.clickHero(key)}>
					<CardActionArea>
						<div style={{ position: 'relative' }}>
							<CardMedia
								draggable='false'
								height='40'
								component='img'
								alt={key}
								image={images[key]}
								title={key}
							/>
							<img src={rhombus} alt='rhombus' style={corner} />
							<img
								src={numbers[`numeric-${value.cost}-black`]}
								alt={value.cost}
								style={corner}
							/>
						</div>
						<div className='textStyle'>
							{value.heroRace.map(item => {
								return (
									<div key={item} className={`${item} overflowStyle`}>
										<b>{item}</b>&nbsp;
									</div>
								);
							})}
						</div>
						<div className='textStyle' style={{ paddingTop: 0 }}>
							<div
								className={`${value.heroClass.replace(' ', '')} overflowStyle`}>
								<b>{value.heroClass}</b>
							</div>
						</div>
					</CardActionArea>
				</Card>
			);
		});
	}

	render() {
		return <div className='cardWrapperStyle'>{this.createCards()}</div>;
	}
}


const mapStateToProps = state => {
	return {
		selectedHeroes: state.selectedHeroes
	};
};

const mapDispatchToProps = {
	selectHero,
	deselectHero
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RenderHeroCards);
