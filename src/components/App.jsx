import React from 'react';
import HeroList from './HeroList';
import { Provider } from 'react-redux';

import store from '../redux/store';

const App = () => {
	return (
		<Provider store={store}>
			<div>
				App
				<HeroList />
			</div>
		</Provider>
	);
};

export default App;
