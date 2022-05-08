import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import ContentBarChart from './ContentBarChart';
import ContnetLineChart from './ContentLineChart';
import * as Api from '../Commons/Api';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userIdState, loginState, carbonState } from '../Pages/User/UserAtom';
const StyledGraphInfo = styled(Card)`
	background-color: ${param => param.backgroundColor};
	border: solid 1px black;
	width: ${param => param.width};
	height: ${param => (param.height ? param.height : '300px')};
	min-width: ${param => param.minWidth};
	margin-right: 10px;
	text-align: center;
	padding-top: 20px;
	margin-left: 20px;
	border-radius: 10px;
`;
const StyledGraphInfoText = styled.span`
	font-size: 30px;
	font-weight: bold;
`;

const ContentGraph = ({ num, title, color, width, height }) => {
	const id = useRecoilValue(userIdState);

	const [단백질, setProtein] = useState(0);
	const [지방, setfat] = useState(0);
	const [탄수화물, setCarbon] = useState(0);
	const [fooddata, setFooddata] = useState();
	const [errorCheck, setErrorCheck] = useState(false);

	const loadingUserFood = async () => {
		const res = await Api.get(`user/mealdata/${id}`);
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

	const data = {
		// 각 막대별 라벨
		datasets: [
			{
				borderWidth: 1, // 테두리 두께
				data: fooddata, // 수치
				backgroundColor: ['yellow', 'red', 'green'], // 각 막대 색
			},
		],
	};

	return (
		<>
			<StyledGraphInfo height={height} width={width} backgroundColor={color}>
				<StyledGraphInfoText>{title}</StyledGraphInfoText>
				{num === 1 ? <ContentBarChart data={data} /> : <ContnetLineChart data={data} />}
			</StyledGraphInfo>
		</>
	);
};

export default ContentGraph;
