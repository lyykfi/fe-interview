import React, { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Tabs } from 'antd';
import { TABS } from './consts';

const { TabPane } = Tabs;

const TabPanel = () => {
	const history = useHistory();
	const location = useLocation();

	const onChangeCallback = useCallback((path: any) => {
		history.push(path);
	}, [history]);

	return (<Tabs
			defaultActiveKey={location.pathname}
			onChange={onChangeCallback}
		>
		{TABS.map((item) => {
			return (<TabPane key={item.url} tab={item.title} />);
		})}
	</Tabs>);
}

export default TabPanel;