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
				<ContentGraph
					num={1}
					height={'10%'}
					width={'42%'}
					title={'금일 영양 정보'}
				></ContentGraph>
			</StyledContainer>

			<StyledContainer margin="25px 0 40px 0" style={{ display: 'flex' }}>
				<ContentGraph
					num={2}
					height={'20%'}
					width={'68%'}
					title={'요일별 칼로리 섭취량'}
				></ContentGraph>
			</StyledContainer>
		</>
	);
};
Userpage.defaultProps = { title: '유저페이지' };

export default Userpage;
