import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import { connect } from 'react-redux';

import SearchBar from './searchBar';
import { CLEAR_SEARCH, SUBMIT } from '../../constants/text';
import { PAPER_COLOR } from '../../constants/color';
import { resetSelectedHeroes, filterData } from '../../redux/actions';

class SearchArea extends Component {
	state = {
		searchValue: ''
	};

	resetSearch = () => {
		this.props.filterData('');
		this.setState({ searchValue: '' });
	};

	submitSearch = event => {
		event.preventDefault();
		this.startSearch();
	};

	startSearch = () => {
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

	renderButton(text, onClick, color, size = 'large') {
		return (
			<Button
				size={size}
				onClick={onClick}
				style={{ backgroundColor: color }}
				variant='contained'>
				<Typography variant='button' style={{ color: 'white' }}>
					{text}
				</Typography>
			</Button>
		);
	}

	render() {
		const placeholder = 'Search by hero name or class or race. e.g. razor';
		return (
			<Grid
				justify='space-between'
				alignItems='center'
				alignContent='center'
				container
				style={{ marginTop: '5px' }}
				spacing={16}>
				<Grid item md={12} lg={6}>
					<Paper style={{ backgroundColor: PAPER_COLOR }}>
						<form onSubmit={this.submitSearch}>
							<SearchBar
								changeState={this.onSearchChange}
								searchValue={this.state.searchValue}
								placeholder={placeholder}
							/>
						</form>
					</Paper>
				</Grid>
				<Grid
					item
					md={12}
					lg={6}
					spacing={16}
					container
					justify='flex-start'
					wrap='nowrap'
					alignContent='center'>
					<Grid item>
						{this.renderButton(SUBMIT, () => this.startSearch(), blue[600])}
					</Grid>
					<Grid item>
						{this.renderButton(
							CLEAR_SEARCH,
							() => this.resetSearch(),
							red[600]
						)}
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default connect(
	null,
	{ resetSelectedHeroes, filterData }
)(SearchArea);
