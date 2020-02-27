import { createAction, Dispatch } from "@reduxjs/toolkit";
import { fetchBillsRequest, removeBillByIdRequest } from "store/api/bill";
import { Bill } from "store/reducers/bill/types";

export const fetchBillStart = createAction('FETCH_BILL_START');

export const fetchBillSuccess = createAction<Bill[]>('FETCH_BILL_SUCCESS');

export const deleteBillSuccess = createAction<string>('DELETE_BILL_SUCCESS');

export const transactionToBillSuccess = createAction<string>('TRANSACTION_TO_BILL_SUCCESS');

export const fetchBills = () => {
	return async (dispatch: Dispatch) => {
		dispatch(fetchBillStart());
		const result = await fetchBillsRequest();

		dispatch(fetchBillSuccess(result));
	}
}

export const removeBillById = (id: string) => {
	return async (dispatch: Dispatch) => {
		await removeBillByIdRequest(id);

		dispatch(deleteBillSuccess(id));
	}
}

export const transactionToBill = (id: string) => {
	return async (dispatch: Dispatch) => {
		console.log('transactionToBillSuccess');
		dispatch(transactionToBillSuccess(id));
	}
}