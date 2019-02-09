import React from 'react';

import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

export default ({ changeState, searchValue, placeholder }) => {
	return (
		<Grid>
			<TextField
				fullWidth
				placeholder={placeholder}
				label={<SearchIcon />}
				variant='outlined'
				onChange={changeState}
				value={searchValue}
			/>
		</Grid>
	);
};
