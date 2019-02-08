import React, { Component } from 'react';

import RenderHeroCards from './RenderHeroCards';
import HeroSelector from '../HigherOrderedComponents/HeroSelector';

class AlphaHeroes extends Component {
	render() {
		const { heroData } = this.props;
		return (
			<div>
				<RenderHeroCards heroData={heroData} />
			</div>
		);
	}
}

export default HeroSelector(AlphaHeroes);
