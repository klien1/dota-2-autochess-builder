import React, { Component } from 'react';

import heroData from '../../data/heroData';
import RenderHeroCards from './RenderHeroCards';

class AlphaHeroes extends Component {
	render() {
		// console.log()
		return (
			<div>
				<RenderHeroCards heroData={heroData} />
			</div>
		);
	}
}

export default AlphaHeroes;
