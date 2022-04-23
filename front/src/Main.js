import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
	display: flex;
	width: 100%;
	height: 646px;
`;

const StyledContents = styled.div`
	flex: ${props => (props.flex ? props.flex : 'none')};
	background-image: ${props => (props.bgImage ? props.bgImage : 'none')};
`;

const Main = () => {
	const mainImages = ['/mainImage1.jpg', '/mainImage2.jpg', '/mainImage3.jpg'];

	return (
		<>
			<StyledSection>
				<StyledContents>Hi</StyledContents>
			</StyledSection>
			<StyledSection>
				<StyledContents>Hi</StyledContents>
			</StyledSection>
		</>
	);
};

export default Main;
