function importAll(r) {
	const images = {};
	r.keys().forEach(item => {
		const regex = /\.\/|\.png/g;
		const key = item.replace(regex, '');
		images[key] = r(item);
	});
	return images;
}

const images = importAll(
	require.context('../static/heroImage', false, /.png$/)
);

export default images;
