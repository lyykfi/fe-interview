import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BillListContainerProps } from './types';
import { getBillLoadingState, getBills, getTransactions } from 'store/selectors/bill';
import { fetchBills } from 'store/actions/bill';
import BillList from './index';

const BillListContainer: React.FunctionComponent<BillListContainerProps> = (
	props) => {
	
	const dispath = useDispatch();
	const isLoaded = useSelector(getBillLoadingState);
	const bills = useSelector(getBills);
	const transactions = useSelector(getTransactions);

	useEffect(() => {
		if (!isLoaded) {
			dispath(fetchBills());
		}
	}, [dispath, isLoaded]);

	const items = props.isBill ? bills : transactions;

	console.log(items);

	return <BillList bills={items} />;
}

export default BillListContainer;