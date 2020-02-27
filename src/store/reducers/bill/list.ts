import { createReducer } from "@reduxjs/toolkit";
import { BillListReducer, Bill } from './types';
import { fetchBillStart, fetchBillSuccess, deleteBillSuccess, transactionToBillSuccess } from "store/actions/bill";

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
	},
	[deleteBillSuccess.type]: (state, action) => {
		const bills = state.bills.filter((item) => item.id !== action.payload);

		return {
			...state,
			bills,
		}
	},
	[transactionToBillSuccess.type]: (state, action) => {
		let transaction = state.transactions.find((item) => item.id === action.payload);
		const transactions = state.transactions.filter((item) => item.id !== action.payload);
		if (transaction) {
			transaction = {
				...transaction,
				isBill: true,
			}
		}
		const bills = [...state.bills, transaction];
		
		return {
			...state,
			bills: bills as any,
			transactions: [...transactions],
		}
	},
})

export default billListReducer;