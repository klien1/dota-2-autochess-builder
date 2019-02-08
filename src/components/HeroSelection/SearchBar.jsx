import React, { Component } from 'react';
import { connect } from 'react-redux';
import CancelIcon from '@material-ui/icons/Cancel';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { filterData } from '../../redux/actions';

class SearchBar extends Component {
	state = {
		searchValue: ''
	};

	resetSearch = () => {
		this.props.filterData('');
		this.setState({ searchValue: '' });
	};

	submitSearch = event => {
		event.preventDefault();
		this.props.filterData(this.state.searchValue);
		this.setState({ searchValue: '' });
	};

	onSearchChange = event => {
		const { value } = event.target;
		if (value.length < 15)
			this.setState({
				searchValue: value
			});
	};

	renderSearchBar() {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center'
				}}>
				<div className='searchIcon'>
					<SearchIcon />
				</div>
				<InputBase
					placeholder='Search…'
					onChange={this.onSearchChange}
					style={{ width: '100%' }}
					value={this.state.searchValue}
				/>
				<Button onClick={this.resetSearch}>
					<CancelIcon />
				</Button>
			</div>
		);
	}

	render() {
		return (
			<div className='searchWrapper'>
				<form onSubmit={this.submitSearch}>{this.renderSearchBar()}</form>
			</div>
		);
	}
}
export default connect(
	null,
	{ filterData }
)(SearchBar);
