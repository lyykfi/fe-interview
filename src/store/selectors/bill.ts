import { StoreType } from 'store/types';

export const getBillLoadingState = (store: StoreType) =>
	store.bill.list.isLoaded;

export const getBills = (store: StoreType) =>
	store.bill.list.bills;

export const getTransactions = (store: StoreType) =>
	store.bill.list.transactions;
