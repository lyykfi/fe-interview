import React from 'react';
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import AppRouter from 'components/Router';
import { configureRouteStore } from 'store';

const App = () => {
	return (
		<Provider store={configureRouteStore()}>
			<AppRouter />
		</Provider>
	);
}

export default App;
