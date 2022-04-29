import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import ContentUserPage from '../Contents/ContentUserPage';
import ContentUserPageText from '../Contents/ContentUserPageText';
import ContentUserInfo from '../Contents/ContentUserInfo';
const StyledContainer = styled.div`
	width: 100vw;
	margin: ${param => param.margin};
`;

const StyledGraphInfo = styled(Card)`
	background-color: ${param => param.backgroundColor};
	border: solid 1px black;
	width: ${param => param.width};
	height: 300px;
	min-width: ${param => param.minWidth};
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

const StyledUserInfo = styled(Card)`
	margin-left: 30px;
	border: solid 1px black;
	width: ${param => (param.width ? param.width : 'none')};
	max-width: ${param => (param.maxWidth ? param.maxWidth : 'none')};
	height: ${param => param.height};
	margin-right: ${param => (param.marginRight ? param.marginRight : 'none')};
	border-radius: 10px;
`;
const StyledUserInfoBox = styled(Card)`
	padding-top: 13px;
	color: gray;
	font-size: 20px;
	height: 50px;
	border: 1px solid black;
	margin-bottom: 10px;
	border-radius: 10px;
	width: 90%;
`;

const Userpage = () => {
	const userInfo = ['연령 만 29 세/ 남성', '키 175cm', '몸무게 68kg'];
	return (
		<>
			<StyledContainer margin="0px">
				<ContentUserPageText />
			</StyledContainer>
			<StyledContainer margin="15px 0 0 0" style={{ display: 'flex' }}>
				<ContentUserInfo num={1} title={'기본정보'} userInfo={userInfo} />
				<ContentUserInfo num={2} title={'기본정보'} userInfo={userInfo} />
			</StyledContainer>

			<StyledContainer margin="25px 0 0 0" style={{ display: 'flex' }}>
				<ContentUserInfo num={3} title={'기본정보'} userInfo={userInfo} />

				<StyledGraphInfo minWidth="350px" width="20%" backgroundColor="pink">
					<StyledGraphInfoText>탄수 화물이 부족합니다</StyledGraphInfoText>
				</StyledGraphInfo>
				<StyledGraphInfo minWidth="350px" width="20%" backgroundColor="green">
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
