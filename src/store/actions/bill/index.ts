import { createAction, Dispatch } from "@reduxjs/toolkit";
import { fetchBillsRequest } from "store/api/bill";
import { Bill } from "store/reducers/bill/types";

export const fetchBillStart = createAction('FETCH_BILL_START');

export const fetchBillSuccess = createAction<Bill[]>('FETCH_BILL_SUCCESS');

export const fetchBills = () => {
	return async (dispatch: Dispatch) => {
		dispatch(fetchBillStart());
		const result = await fetchBillsRequest();

		dispatch(fetchBillSuccess(result));
	}
}