import { TabItem } from './types';
import { getPath, Routers } from 'components/Router/consts';

export const TABS: TabItem[] = [
	{
		title: 'Bills',
		url: getPath(Routers.BILL),
	},
	{
		title: 'Transactions',
		url: getPath(Routers.TRANSACTIONS),
	}
]

