import React, { Component } from 'react';

import RenderHeroCards from './RenderHeroCards';
import HeroSelector from '../HigherOrderedComponents/HeroSelector';
import RenderHeroList from './RenderHeroList';

class AlphaHeroes extends Component {
	render() {
		const { heroData } = this.props;
		return (
			<div>
				<RenderHeroList />
				{/* <RenderHeroCards heroData={heroData} />
				 */}
			</div>
		);
	}
}

export default HeroSelector(AlphaHeroes);
