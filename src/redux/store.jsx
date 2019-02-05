import { createStore } from 'redux';
// import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import images from '../data/images';

// function importAll(r) {
// 	const images = {};
// 	r.keys().forEach(item => {
// 		const regex = /\.\/|\.png/g;
// 		const key = item.replace(regex, '');
// 		images[key] = r(item);
// 	});
// 	return images;
// }

// const images = importAll(
// 	require.context('../static/heroImage', false, /.png$/)
// );

// const INITIAL_STATE = {};
const INITIAL_STATE = { images };
// const INITIAL_STATE = { images, selectedHero: {} };
// const MIDDLEWARE = applyMiddleware(reduxThunk);

// const store = createStore(reducers, INITIAL_STATE, MIDDLEWARE);
const store = createStore(reducers, INITIAL_STATE);

export default store;
