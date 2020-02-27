import { combineReducers } from "@reduxjs/toolkit";
import list from './list';

export const billReducers = combineReducers({
	list,
})

export default billReducers;
