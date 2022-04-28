import React from 'react';
import styled from 'styled-components';
const StyledContainer = styled.div`
	width: 100vw;
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
	width: 80%;
	max-width: 1000px;
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
	border: solid 1px black;
	width: 400px;
	height: 300px;
	margin-right: 100px;
	text-align: center;
	padding-top: 20px;
	margin-left: 20px;
`;
const Userpage = ({ title }) => {
	return (
		<>
			<StyledContainer>
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
			<StyledContainer>
				<StyledUserInfo>
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

			<StyledContainer>
				<StyledUserInfo style={{ maxWidth: '800px' }}>
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
				<StyledGraphInfo style={{ backgroundColor: 'pink' }}>
					<span style={{ fontSize: '30px', color: 'white', fontWeight: 'bold' }}>
						탄수 화물이 부족합니다
					</span>
				</StyledGraphInfo>
				<StyledGraphInfo style={{ backgroundColor: 'green' }}>
					<span style={{ fontSize: '30px', color: 'white', fontWeight: 'bold' }}>
						지방섭취가 원활합니다
					</span>
				</StyledGraphInfo>
			</StyledContainer>

			<StyledContainer>
				<StyledUserInfo style={{ maxWidth: '800px', width: '700px', height: '500px' }}>
					<h1 style={{ fontWeight: 'lighter' }}>추천 식품군</h1>
					<div style={{ border: 'solid 1px black', marginBottom: '10px' }}></div>
				</StyledUserInfo>

				<StyledUserInfo
					style={{
						maxWidth: '800px',
						width: '700px',
						height: '500px',
						marginRight: '100px',
					}}
				>
					<h1 style={{ fontWeight: 'lighter', textAlign: 'center' }}>식단 추이표</h1>
				</StyledUserInfo>
			</StyledContainer>
		</>
	);
};
Userpage.defaultProps = { title: '유저페이지' };

export default Userpage;
