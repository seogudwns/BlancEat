import React from 'react';

import * as s from './Styles/stylePages';
import ContentRecommandOutput from '../Contents/ContentRecommandOutput';
import ContentRecommand from '../Contents/ContentRecommand';

const Recommand = () => {
	return (
		<s.PageContainer fluid>
			<ContentRecommand />
			<ContentRecommandOutput />
		</s.PageContainer>
	);
};

export default Recommand;
