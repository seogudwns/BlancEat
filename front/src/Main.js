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
	flex-direction: ${props => (props.direction ? props.direction : 'none')};
	justify-content: ${props => (props.jc ? props.jc : 'none')};
	align-items: ${props => (props.ai ? props.ai : 'none')};
	flex: ${props => (props.flex ? props.flex : 'none')};
	width: 100%;
	height: 100%;
`;

const StyledImageButton = styled.div`
	width: 20px;
	height: 20px;
	background-color: ${props => props.color};
	border: 2px solid white;
	border-radius: 50%;
	margin: 10px;
	margin-bottom: 20px;
	cursor: pointer;
`;

const StyledText = styled.div`
	text-align: ${props => (props.ta ? props.ta : 'none')};
	color: ${props => (props.color ? props.color : 'none')};
	font-size: ${props => (props.size ? props.size : 'none')};
`;

const StyledContainer = styled.div`
	width: 623px;
	height: 230px;
	border: 2px solid #c8c8c8;
	margin-top: 70px;
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
						{...(curImgIndex === 0 ? { color: '#00c14d' } : { color: 'white' })}
					></StyledImageButton>
					<StyledImageButton
						onClick={() => setCurImgIndex(1)}
						{...(curImgIndex === 1 ? { color: '#00c14d' } : { color: 'white' })}
					></StyledImageButton>
					<StyledImageButton
						onClick={() => setCurImgIndex(2)}
						{...(curImgIndex === 2 ? { color: '#00c14d' } : { color: 'white' })}
					></StyledImageButton>
				</StyledContents>
			</StyledSection>
			<StyledSection>
				<StyledContents jc="center" ai="center" direction="column">
					<StyledText size="1.5rem">당신은 얼마나 건강한 삶을 살고 계시나요?</StyledText>
					<br />
					<StyledText color="#6E726E" size="1.2rem" ta="center">
						아래 정보를 입력하여
						<br />
						가장 간단한 건강 지표 중 하나인
						<br />
						BMI 지수를 확인해 보세요.
					</StyledText>
					<StyledContainer></StyledContainer>
				</StyledContents>
			</StyledSection>
		</>
	);
};

export default Main;
