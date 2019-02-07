import React, { Component } from 'react';
import { connect } from 'react-redux';
import heroData from '../../data/heroData';
import _ from 'lodash';

class CurrentUnitCount extends Component {
	countHeroes() {
		const heroCount = {};
		const { selectedHeroes } = this.props;
		_.forEach(selectedHeroes, (value) => {

			const curClass = heroData[value].heroClass;
			const curRaceArray = heroData[value].heroRace;

			this.addTo(heroCount, curClass);
			_.forEach(curRaceArray, (item) => {
				this.addTo(heroCount, item)
			})
		});
		return heroCount;
	}

	addTo(object, value) {
		if (object[value] === undefined) {
			object[value] = 1;
		} else {
			++object[value];
		}
	}

	render() {
		const heroCount = this.countHeroes();
		return <div>{_.map(heroCount, (value, key) => {
			return <div key={key} style={{backgroundColor: 'white', margin: 0}}>
					<p className={`${key.replace(' ', '')}`} key={key}>{`${key}: ${value}`}</p>
				</div>
		})}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		selectedHeroes: state.selectedHeroes
	}
}


export default connect(mapStateToProps)(CurrentUnitCount);