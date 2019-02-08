import importAll from '../helper/importAll';

const icons = importAll(
	require.context('../static/classAndRace', false, /.png$/)
);

export default icons;
