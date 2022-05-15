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
import { useNavigate } from 'react-router-dom';

import { data } from '../Contents/ChartData';
const StyledContainer = styled.div`
	width: 100%;
	margin: ${param => param.margin};
`;

const Userpage = () => {
	const id = useRecoilValue(userIdState);
	const navigate = useNavigate();

	const [단백질, setProtein] = useState(0);
	const [지방, setfat] = useState(0);
	const [탄수화물, setCarbon] = useState(0);
	const [fooddata, setFooddata] = useState();
	const [errorCheck, setErrorCheck] = useState(false);

	const loadingUserFood = async () => {
		const res = await Api.get(`user/mealdata/${id}`);
		console.log(res.data);
		setfat(res.data.지방);
		setProtein(res.data.단백질);
		setCarbon(res.data.탄수화물);
		setFooddata({ 지방, 단백질, 탄수화물 });
		setErrorCheck(true);
	};
	useEffect(() => {
		if (errorCheck) {
			setTimeout(() => {
				loadingUserFood();
			}, [1]);
		} else {
			setTimeout(() => {
				loadingUserFood();
			}, [1]);
		}
	}, [errorCheck]);

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
						fooddata={fooddata}
						num={1}
						height={'10%'}
						width={'70%'}
						title={'금일 영양 정보'}
					></ContentGraph>
				}
			</StyledContainer>
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
				{!fooddata ? (
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
