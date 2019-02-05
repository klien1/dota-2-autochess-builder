import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectHero } from '../../redux/actions';
import heroData from '../../data/heroData';

export default ChildComponent => {
	class ComposedComponent extends Component {
		render() {
			return <ChildComponent {...this.props} heroData={heroData} />;
		}
	}

	const mapStateToProps = state => {
		return {
			images: state.images,
			selectedHeroes: state.selectedHeroes
		};
	};

	const mapDispatchToProps = {
		selectHero
	};

	return connect(
		mapStateToProps,
		mapDispatchToProps
	)(ComposedComponent);
};
