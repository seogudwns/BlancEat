import React from 'react';

import { PageContainer } from '../Styles/stylePages';
import RecsysOutputAddon from './RecsysOutputAddon';
import ContentRecommand from './ContentRecommand';
import { RecommandProvider } from './RecommandContext';

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
