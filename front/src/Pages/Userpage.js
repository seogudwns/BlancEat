import React from 'react';
import styled from 'styled-components';
const StyledContainer = styled.div`
	width: 100vw;
	margin: ${param => param.margin};
`;

const StyledToomuchBox = styled.h1`
	margin: ${param => (param.margin ? param.margin : 'none')};
	padding: ${param => (param.padding ? param.padding : 'none')};
	background-color: green;
	color: white;
	height: 50px;
	font-size: ${param => (param.fontSize ? param.fontSize : 'none')};
`;
const StyledToomuchText = styled.h1`
	margin: ${param => (param.margin ? param.margin : 'none')};
	padding: ${param => (param.padding ? param.padding : 'none')};
	color: gray;
	font-size: ${param => (param.fontSize ? param.fontSize : 'none')};
`;
const StyledUserInfo = styled.div`
	margin-left: 30px;
	border: solid 1px black;
	width: ${param => (param.width ? param.width : 'none')};
	max-width: ${param => (param.maxWidth ? param.maxWidth : 'none')};
	height: ${param => param.height};
	margin-right: ${param => (param.marginRight ? param.marginRight : 'none')};
	border-radius: 10px;
`;
const StyledUserInfoBox = styled.div`
	padding-top: 13px;
	color: gray;
	font-size: 20px;
	height: 50px;
	border: 1px solid black;
	margin-bottom: 10px;
	border-radius: 10px;
	width: 90%;
`;

const StyledUserBmiInfoBox = styled.div`
	padding-top: 13px;
	color: gray;
	font-size: 20px;
	height: 50px;
	border: 1px solid black;
	margin-bottom: 10px;
	border-radius: 10px;
	width: 300px;
`;
const StyledUserBmibox = styled.div`
	margin-left: 30px;
	border: solid 1px black;
	width: 50%;
	max-width: 500px;
	margin-right: 100px;
	border-radius: 10px;
`;
const StyledGraphInfo = styled.div`
	background-color: ${param => param.backgroundColor};
	border: solid 1px black;
	width: ${param => param.width};
	height: 300px;
	margin-right: 10px;
	text-align: center;
	padding-top: 20px;
	margin-left: 20px;
`;
const StyledGraphInfoText = styled.span`
	font-size: 30px;
	color: white;
	font-weight: bold;
`;
const Userpage = () => {
	return (
		<>
			<StyledContainer margin="0px">
				<div style={{ display: 'inline-flex' }}>
					<StyledToomuchBox
						fontSize="30px"
						margin="25px 0 10px 30px"
						padding="30px 50px 0px 50px"
					>
						사용자 건강정보
					</StyledToomuchBox>
					<StyledToomuchText
						margin="25px 0 10px 30px"
						padding="30px 50px 0px 50px"
						fontSize="30px"
					>
						당신의 건강상태는 <span style={{ color: 'green' }}>양호</span>입니다
					</StyledToomuchText>
				</div>
			</StyledContainer>
			<StyledContainer margin="15px 0 0 0" style={{ display: 'flex' }}>
				<StyledUserInfo width="40%">
					<h1 style={{ fontWeight: 'lighter' }}>기본 신체 정보</h1>
					<div style={{ border: 'solid 1px black', marginBottom: '10px' }}></div>
					<div style={{ display: 'flex' }}>
						<div style={{ width: '30%' }}>gd</div>
						<div style={{ width: '70%' }}>
							<StyledUserInfoBox>연령 만 29 세/ 남성</StyledUserInfoBox>
							<StyledUserInfoBox>키 175cm</StyledUserInfoBox>
							<StyledUserInfoBox>몸무게 68kg</StyledUserInfoBox>
						</div>
					</div>
				</StyledUserInfo>

				<StyledUserBmibox>
					<h1 style={{ fontWeight: 'lighter' }}>BMI 지수</h1>
					<div style={{ border: 'solid 1px black', marginBottom: '10px' }}></div>
					<div style={{ display: 'flex' }}>
						<div style={{ margin: '0px auto' }}>
							<StyledUserBmiInfoBox>연령 만 29 세/ 남성</StyledUserBmiInfoBox>
							<StyledUserBmiInfoBox>키 175cm</StyledUserBmiInfoBox>
							<StyledUserBmiInfoBox>몸무게 68kg</StyledUserBmiInfoBox>
						</div>
					</div>
				</StyledUserBmibox>
			</StyledContainer>

			<StyledContainer margin="25px 0 0 0" style={{ display: 'flex' }}>
				<StyledUserInfo maxWidth="800px" width="25%">
					<h1 style={{ fontWeight: 'lighter' }}>영양 정보</h1>
					<div style={{ border: 'solid 1px black', marginBottom: '10px' }}></div>
					<div style={{ display: 'flex' }}>
						<div style={{ width: '100%', textAlign: 'right' }}>
							<StyledUserInfoBox>
								<span>단백질</span>
							</StyledUserInfoBox>
							<StyledUserInfoBox>
								<span>지방</span>
							</StyledUserInfoBox>
							<StyledUserInfoBox>
								<span>탄수화물</span>
							</StyledUserInfoBox>
						</div>
					</div>
				</StyledUserInfo>
				<StyledGraphInfo width="20%" backgroundColor="pink">
					<StyledGraphInfoText>탄수 화물이 부족합니다</StyledGraphInfoText>
				</StyledGraphInfo>
				<StyledGraphInfo width="20%" backgroundColor="green">
					<StyledGraphInfoText>지방섭취가 원활합니다</StyledGraphInfoText>
				</StyledGraphInfo>
			</StyledContainer>

			<StyledContainer margin="25px 0 40px 0" style={{ display: 'flex' }}>
				<StyledUserInfo maxWidth="800px" width="600px" height="500px">
					<h1 style={{ fontWeight: 'lighter' }}>추천 식품군</h1>
					<div style={{ border: 'solid 1px black', marginBottom: '10px' }}></div>
				</StyledUserInfo>

				<StyledUserInfo maxWidth="800px" width="660px" height="500px" marginRight="100px">
					<h1 style={{ fontWeight: 'lighter', textAlign: 'center' }}>식단 추이표</h1>
				</StyledUserInfo>
			</StyledContainer>
		</>
	);
};
Userpage.defaultProps = { title: '유저페이지' };

export default Userpage;
