import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BillListContainerProps } from './types';
import { getBillLoadingState, getBills, getTransactions } from 'store/selectors/bill';
import { fetchBills, removeBillById, transactionToBill } from 'store/actions/bill';
import BillList from './index';

const BillListContainer: React.FunctionComponent<BillListContainerProps> = (
	props) => {
	
	const dispath = useDispatch();
	const isLoaded = useSelector(getBillLoadingState);
	const bills = useSelector(getBills);
	const transactions = useSelector(getTransactions);

	const onRemoveBill = useCallback((id: string) => {
		dispath(removeBillById(id));
	}, [dispath]);

	const onTransactionToBill = useCallback((id: string) => {
		dispath(transactionToBill(id));
	}, [dispath]);

	useEffect(() => {
		if (!isLoaded) {
			dispath(fetchBills());
		}
	}, [dispath, isLoaded]);

	const items = props.isBill ? bills : transactions;

	return <BillList
		bills={items}
		onRemoveBill={onRemoveBill}
		onTransactionToBill={onTransactionToBill} />;
}

export default BillListContainer;