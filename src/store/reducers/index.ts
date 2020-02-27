import { combineReducers } from "@reduxjs/toolkit";

import bill from './bill';
import { StoreType } from "store/types";

export const rootReducers = combineReducers<StoreType>({
	bill,
})

export default rootReducers;
