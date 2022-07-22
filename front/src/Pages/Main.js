import React from 'react';
import styled from 'styled-components';
import ContentBMI from '../Contents/ContentBMI';
import ContentApproach from '../Contents/ContentApproach';

const StyledContainer = styled.div`
	width: 100vw;
`;

const Main = () => {
	return (
		<>
			<StyledContainer>
				<ContentApproach />
				<ContentBMI />
			</StyledContainer>
		</>
	);
};

export default Main;
