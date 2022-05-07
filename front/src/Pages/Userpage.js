import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StyledButton as StyledBtn } from '../Components/Styles/styleButton';
import { Card } from 'react-bootstrap';
import ContentUserPageText from '../Contents/ContentUserPageText';
import ContentUserInfo from '../Contents/ContentUserInfo';
import ContentGraph from '../Contents/ContentGraph';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userIdState, loginState, carbonState } from './User/UserAtom';
import * as Api from '../Commons/Api';
import { StyledText } from '../Contents/styleContents';

import { data } from '../Contents/ChartData';
const StyledContainer = styled.div`
	width: 100%;
	margin: ${param => param.margin};
`;

const Userpage = () => {
	const id = useRecoilValue(userIdState);

	const noFood = true;

	return (
		<>
			<StyledContainer margin="0px">
				<ContentUserPageText />
			</StyledContainer>
			<StyledContainer
				margin="25px 0 0 0"
				style={{ display: 'flex', justifyContent: 'center' }}
			>
				{
					<ContentGraph
						data={data}
						num={1}
						height={'10%'}
						width={'70%'}
						title={'금일 영양 정보'}
					></ContentGraph>
				}
			</StyledContainer>
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
				{!noFood ? (
					<StyledText color="red" size="1.5rem">
						오늘의 식단을 입력하지 않으셨습니다. 아래 버튼을 눌러 오늘 예상 식단을
						입력해주세요!
					</StyledText>
				) : (
					<StyledText color="red" size="1.5rem" style={{ visibility: 'hidden' }}>
						오늘의 식단을 입력하지 않으셨습니다. 아래 버튼을 눌러 오늘 예상 식단을
						입력해주세요!
					</StyledText>
				)}
			</div>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<StyledBtn
					style={{ background: '#075f3a', margin: '1.5rem 0 1.5rem 0', width: '30%' }}
					onClick={() => navigate('/recommand')}
				>
					<b style={{ fontSize: '1.5rem' }}>오늘의 식단 추천 받기</b>
				</StyledBtn>
			</div>
		</>
	);
};
Userpage.defaultProps = { title: '유저페이지' };

export default Userpage;
