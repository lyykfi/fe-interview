import React, { useState, useCallback } from 'react';
import Card from 'antd/lib/card';
import { BillListItemProps } from './types';
import { BillListItemWrapper } from './styles';
import BillListItemTransactions from './BillListItemTransaction';
import Icon from 'antd/lib/icon';
import { Button } from 'antd';

const BillListItem: React.FunctionComponent<BillListItemProps> = (props) => {
	const { bill, onRemoveBill, onTransactionToBill } = props;
	const { transactions } = bill;
	const [isShowTransactions, updateIsShowTransactions ] = useState(false);

	const updateTransactionStateCallback = useCallback(() => {
		updateIsShowTransactions(!isShowTransactions);
	}, [isShowTransactions, updateIsShowTransactions]);

	const onRemoveBillCallback = useCallback(() => {
		onRemoveBill(bill.id);
	}, [bill.id, onRemoveBill]);

	const onTransactionToBillCallback = useCallback(() => {
		onTransactionToBill(bill.id);
	}, [bill.id, onTransactionToBill]);

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
			actions={bill.isBill ? [
				<Button
					type="danger" 
					onClick={onRemoveBillCallback}>
					Delete
					<Icon
						type="delete"
						key="delete"
					/>
				</Button>,
			]: [
				<Button
					type="primary" 
					onClick={onTransactionToBillCallback}>
					Add as bill
					<Icon
						type="copy"
						key="copy"
					/>
				</Button>
			]}
		>
			{isShowTransactions && <BillListItemTransactions transactions={transactions}/>}
		</Card>
	</BillListItemWrapper>;
}

export default BillListItem;