import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
	class ComposedComponent extends Component {
		render() {
			if (!!!this.props.heroData) return null;
			return <ChildComponent {...this.props} />;
		}
	}

	const mapStateToProps = ({ heroData }) => {
		return { heroData };
	};

	return connect(mapStateToProps)(ComposedComponent);
};
