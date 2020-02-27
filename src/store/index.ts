import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import rootReducer from './reducers';

export const configureRouteStore = () => {
	return  configureStore({
		reducer: rootReducer,
		middleware: [...getDefaultMiddleware()],
		devTools: process.env.NODE_ENV !== 'production',
	});
}