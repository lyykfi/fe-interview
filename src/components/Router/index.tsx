import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";

import BillTab from 'components/BillTab';
import TransactionsTab from 'components/TransactionsTab';
import { Routers, getPath } from './consts';

const history = createBrowserHistory();

const AppRouter = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route
					path={getPath(Routers.TRANSACTIONS)}
					component={TransactionsTab} />
				<Route
					path={getPath(Routers.BILL)}
					component={BillTab} />
			</Switch>
		</Router>
	);
}

export default AppRouter;
