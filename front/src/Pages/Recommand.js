import React from 'react';
import styled from 'styled-components';
import ContentRecommandOutput from '../Contents/ContentRecommandOutput';
import ContentRecommand from '../Contents/ContentRecommand';

import { Container } from 'react-bootstrap';

const StyledContainer = styled.div`
	width: 100vw;
`;

const PageContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: auto;
	width: 1440px;
	margin: 0;
	padding: 0;
`;

const Recommand = () => {
	return (
		<PageContainer fluid>
			<ContentRecommand />
			<ContentRecommandOutput />
		</PageContainer>
	);
};

export default Recommand;
