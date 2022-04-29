import React from 'react';

import { RecommandProvider } from './RecommandContext';
import RecsysOutputAddon from './RecsysOutputAddon';
import ContentRecommand from './ContentRecommand';
import { PageContainer } from '../Styles/stylePages';

const Recommand = () => {
	return (
		<RecommandProvider>
			<PageContainer fluid>
				<ContentRecommand />
				<RecsysOutputAddon />
			</PageContainer>
		</RecommandProvider>
	);
};

export default Recommand;
