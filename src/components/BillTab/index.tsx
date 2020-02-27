import React from 'react';

import MainLayout from 'layouts/Main';
import BillListContainer from 'components/BillList/container';

const BillTab = () => {
	return (<MainLayout>
		<BillListContainer isBill={true} />
	</MainLayout>);
}

export default BillTab;