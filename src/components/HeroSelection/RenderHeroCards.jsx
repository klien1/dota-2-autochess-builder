import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { connect } from 'react-redux';
import _ from 'lodash';

import images from '../../data/images';
import classIcons from '../../data/classIcons';
import { selectHero, deselectHero } from '../../redux/actions';
import rhombus from '../../static/background/rhombus.png';
import numbers from '../../data/numbers';

class RenderHeroCards extends Component {
	static defaultProps = {
		isRosterList: false
	};

	clickHero(heroName) {
		const { selectedHeroes } = this.props;
		if (selectedHeroes[heroName] !== undefined)
			this.props.deselectHero(heroName);
		else this.props.selectHero(heroName);
	}

	displayIcons(classOrRace) {
		return (
			<img
				className='iconStyle'
				key={classOrRace}
				src={classIcons[classOrRace]}
				alt={classOrRace}
				title={classOrRace}
			/>
		);
	}

	// currently not being used
	displayText(classOrRace) {
		return (
			<div
				key={classOrRace}
				className={`${classOrRace.replace(' ', '')} overflowStyle`}>
				<b>{classOrRace}</b>&nbsp;
			</div>
		);
	}

	displayCost(cost) {
		return (
			<div>
				<img src={rhombus} alt='rhombus' className='corner' />
				<img
					src={numbers[`numeric-${cost}-black`]}
					alt={cost}
					className='corner'
				/>
			</div>
		);
	}

	createCards() {
		const { heroData, selectedHeroes, isRosterList } = this.props;
		if (!heroData || !selectedHeroes) return null;

		return _.map(heroData, (value, key) => {
			return (
				<Card
					style={
						!isRosterList && selectedHeroes[key] !== undefined
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
								height='60'
								component='img'
								alt={key}
								image={images[key]}
								title={key}
							/>
							{this.displayCost(value.cost)}
						</div>
						{/* <div className='textStyle'> */}
						<div className='iconContainer'>
							{value.heroRace.map(race => {
								return this.displayIcons(race);
								// return (
								// 	<div key={race} className={`${race} overflowStyle`}>
								// 		<b>{race}</b>&nbsp;
								// 	</div>
								// );
							})}
							{/* </div> */}
							{/* <div className='textStyle' style={{ paddingTop: 0 }}> */}
							{this.displayIcons(value.heroClass)}
							{/* <div
								className={`${value.heroClass.replace(' ', '')} overflowStyle`}>
								<b>{value.heroClass}</b>
							</div> */}
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
