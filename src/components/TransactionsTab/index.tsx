import React from 'react';
import MainLayout from 'layouts/Main';
import BillListContainer from 'components/BillList/container';

const TransactionsTab = () => {
	return (<MainLayout>
		<BillListContainer isBill={false} />
	</MainLayout>);
}

export default TransactionsTab;