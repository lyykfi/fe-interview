import React, { useState, useCallback } from 'react';
import Card from 'antd/lib/card';
import { BillListItemProps } from './types';
import { BillListItemWrapper } from './styles';
import BillListItemTransactions from './BillListItemTransaction';

const BillListItem: React.FunctionComponent<BillListItemProps> = (props) => {
	const { bill } = props;
	const { transactions } = bill;
	const [ isShowTransactions, updateIsShowTransactions ] = useState(false);

	const updateTransactionStateCallback = useCallback(() => {
		updateIsShowTransactions(!isShowTransactions);
	}, [isShowTransactions]);

	return <BillListItemWrapper>
		<Card
			title={bill.name}
			type='inner'
			extra={
				// eslint-disable-next-line jsx-a11y/anchor-is-valid
				<a
					onClick={updateTransactionStateCallback}
				>
					{bill.transactions.length}
				</a>}
			style={{ width: 400 }}
		>
			{isShowTransactions && <BillListItemTransactions transactions={transactions}/>}
		</Card>
	</BillListItemWrapper>;
}

export default BillListItem;