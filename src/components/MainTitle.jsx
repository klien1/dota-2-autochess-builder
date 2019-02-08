import React from 'react';
import Typography from '@material-ui/core/Typography';

export default () => {
	const titleStyle = {
		color: 'white',
		textShadow: '4px 3px black'
	};
	return (
		<Typography variant='display1' style={titleStyle}>
			<b>Dota 2 Auto Chess Builder</b>
		</Typography>
	);
};
