import React from 'react';
import TabPanel from 'components/TabPanel';

import { MainContentWrapper } from './styles';

const MainLayout: React.FunctionComponent = (props) => {
	return (
		<>
			<TabPanel />
			<MainContentWrapper>
				{props.children}
			</MainContentWrapper>
		</>
	);
}

export default MainLayout;