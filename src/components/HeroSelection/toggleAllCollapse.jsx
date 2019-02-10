import React from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from '@material-ui/core';

import { openList, closeList } from '../../redux/actions';
// import { OPEN_ALL_COLOR, CLOSE_ALL_COLOR } from '../../constants/color';

const toggleAllCollapse = ({ value, openList, closeList }) => {
	return (
		<Grid item container spacing={40} xs={12} s={12} md={12} lg={12} xl={12}>
			<Grid item>
				<Button
					color='secondary'
					// style={{ backgroundColor: OPEN_ALL_COLOR, color: 'white' }}
					style={{ color: 'white' }}
					variant='contained'
					onClick={() => openList(value)}>
					open all
				</Button>
			</Grid>
			<Grid item>
				<Button
					color='secondary'
					// style={{ backgroundColor: CLOSE_ALL_COLOR, color: 'white' }}
					style={{ color: 'white' }}
					variant='contained'
					onClick={() => closeList(value)}>
					close all
				</Button>
			</Grid>
		</Grid>
	);
};

export default connect(
	null,
	{ openList, closeList }
)(toggleAllCollapse);
