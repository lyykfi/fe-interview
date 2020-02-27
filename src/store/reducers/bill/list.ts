import { createReducer } from "@reduxjs/toolkit";
import { BillListReducer, Bill } from './types';
import { fetchBillStart, fetchBillSuccess } from "store/actions/bill";

const separateBillsAndTransactions = (data: Bill[]) => {
	const bills: Bill[] = [];
	const transactions: Bill[] = [];

	data.forEach((item) => {
		if (item.isBill) {
			bills.push(item);
		} else {
			transactions.push(item);
		}
	})

	return [bills, transactions];
}

export const INIT_STATE: BillListReducer = {
	bills: [],
	transactions: [],
	isLoaded: false,
	isLoading: false,
};

const billListReducer = createReducer(INIT_STATE, {
	[fetchBillStart.type]: (state) => {
		return {
			...state,
			isLoading: true,
		}
	},
	[fetchBillSuccess.type]: (state, action) => {
		const [bills, transactions] = separateBillsAndTransactions(
			action.payload);

		return {
			...state,
			bills,
			transactions,
			isLoading: false,
			isLoaded: true,
		}
	}
})

export default billListReducer;