import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
	display: flex;
	height: 646px;
	background-image: url(${props => (props.bgImage ? props.bgImage : 'none')});
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 100% 100%;
`;

const StyledContents = styled.div`
	flex: ${props => (props.flex ? props.flex : 'none')};
	width: 100%;
	height: 100%;
	vertical-align: ${props => (props.va ? props.va : 'none')};
	text-align: ${props => (props.ta ? props.ta : 'none')};
`;

const Main = () => {
	const mainImages = ['/mainImage1.jpg', '/mainImage2.jpg', '/mainImage3.jpg'];
	const [curImgIndex, setCurImgIndex] = useState(0);

	return (
		<>
			<StyledSection bgImage={mainImages[curImgIndex]}>
				<StyledContents>{}</StyledContents>
			</StyledSection>
			<StyledSection>
				<StyledContents>Hi</StyledContents>
			</StyledSection>
		</>
	);
};

export default Main;
