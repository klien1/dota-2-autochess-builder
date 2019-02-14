import React from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from '@material-ui/core';

import { openList, closeList } from '../../redux/actions';

const toggleAllCollapse = ({ value, openList, closeList }) => {
	return (
		<Grid item container spacing={40} xs={12} s={12} md={12} lg={12} xl={12}>
			<Grid item>
				<Button
					color='secondary'
					style={{ color: 'white' }}
					variant='contained'
					onClick={() => openList(value)}>
					open all
				</Button>
			</Grid>
			<Grid item>
				<Button
					color='secondary'
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
