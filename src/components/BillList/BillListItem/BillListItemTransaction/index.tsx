import React  from 'react';
import { BillListItemTransactionsProps } from './types';
import List from 'antd/lib/list';

const BillListItemTransactions: React.FunctionComponent<BillListItemTransactionsProps> = (props) => {
	const { transactions } = props;

	return <List
		bordered
		dataSource={transactions}
		renderItem={transaction => (
			<List.Item>
				{new Date(transaction.date).toLocaleDateString()}
				<strong> {transaction.amount}</strong>
			</List.Item>
		)}
	/>;
}

export default BillListItemTransactions;