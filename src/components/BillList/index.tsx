import React from 'react';
import { BillListProps } from './types';
import BillListItem from './BillListItem';
import  { BillListWrapper } from './styles';

const BillList: React.FunctionComponent<BillListProps> = (props) => {
	const { bills, onRemoveBill, onTransactionToBill } = props;

	return <BillListWrapper>

		{bills.map((bill) => {
			return <BillListItem
				key={bill.id}
				bill={bill}
				onRemoveBill={onRemoveBill}
				onTransactionToBill={onTransactionToBill}
			/>;
		})}
	</BillListWrapper>;
}

export default BillList;