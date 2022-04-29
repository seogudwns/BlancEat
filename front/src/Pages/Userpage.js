import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import ContentUserPageText from '../Contents/ContentUserPageText';
import ContentUserInfo from '../Contents/ContentUserInfo';
import ContentGraph from '../Contents/ContentGraph';
const StyledContainer = styled.div`
	width: 100vw;
	margin: ${param => param.margin};
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

const Userpage = () => {
	const userInfos = ['연령 만 29 세/ 남성', '키 175cm', '몸무게 68kg'];
	return (
		<>
			<StyledContainer margin="0px">
				<ContentUserPageText />
			</StyledContainer>
			<StyledContainer margin="15px 0 0 0" style={{ display: 'flex' }}>
				<ContentUserInfo num={1} title={'기본정보'} userInfos={userInfos} />
				<ContentUserInfo num={2} title={'BMI'} userInfos={userInfos} />
			</StyledContainer>

			<StyledContainer margin="25px 0 0 0" style={{ display: 'flex' }}>
				<ContentUserInfo num={3} title={'기본정보'} userInfos={userInfos} />
				<ContentGraph title={'탄수화물이 부족합니다'} color={'pink'}></ContentGraph>
				<ContentGraph title={' 지방섭취가 원활합니다'} color={'green'}></ContentGraph>
			</StyledContainer>

			<StyledContainer margin="25px 0 40px 0" style={{ display: 'flex' }}>
				<ContentUserInfo num={2} title={'추천식단'} userInfos={userInfos} />
				<ContentUserInfo num={2} title={'식단그래프'} userInfos={userInfos} />
			</StyledContainer>
		</>
	);
};
Userpage.defaultProps = { title: '유저페이지' };

export default Userpage;
