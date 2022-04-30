import React from 'react';

import { RecommandProvider } from './RecommandContext';
import ContentRecommand from './ContentRecommand';
import { PageContainer } from '../Styles/stylePages';

const Recommand = () => {
	return (
		<RecommandProvider>
			<PageContainer fluid>
				<ContentRecommand />
			</PageContainer>
		</RecommandProvider>
	);
};

export default Recommand;
