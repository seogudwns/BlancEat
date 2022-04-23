import React, { useState } from 'react';
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
	display: flex;
	justify-content: ${props => (props.jc ? props.jc : 'none')};
	align-items: ${props => (props.ai ? props.ai : 'none')};
	flex: ${props => (props.flex ? props.flex : 'none')};
	width: 100%;
	height: 100%;
`;

const StyledImageButton = styled.div`
	width: 20px;
	height: 20px;
	background-color: white;
	border: 1px solid white;
	border-radius: 50%;
	margin: 10px;
	margin-bottom: 20px;
	cursor: pointer;
`;

const Main = () => {
	const mainImages = ['/mainImage1.jpg', '/mainImage2.jpg', '/mainImage3.jpg'];
	const [curImgIndex, setCurImgIndex] = useState(0);

	return (
		<>
			<StyledSection bgImage={mainImages[curImgIndex]}>
				<StyledContents jc="center" ai="flex-end">
					<StyledImageButton
						onClick={() => setCurImgIndex(0)}
						{...(curImgIndex === 0 ? 'selected' : 'none')}
					></StyledImageButton>
					<StyledImageButton
						onClick={() => setCurImgIndex(1)}
						{...(curImgIndex === 1 ? 'selected' : 'none')}
					></StyledImageButton>
					<StyledImageButton
						onClick={() => setCurImgIndex(2)}
						{...(curImgIndex === 2 ? 'selected' : 'none')}
					></StyledImageButton>
				</StyledContents>
			</StyledSection>
			<StyledSection>
				<StyledContents>Hi</StyledContents>
			</StyledSection>
		</>
	);
};

export default Main;
