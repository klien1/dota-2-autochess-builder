import importAll from '../helper/importAll';

export default importAll(
	require.context('../static/miniHeroIcons', false, /.png$/)
);
