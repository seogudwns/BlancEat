import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import ContentUserPageText from '../Contents/ContentUserPageText';
import ContentUserInfo from '../Contents/ContentUserInfo';
import ContentGraph from '../Contents/ContentGraph';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { userIdState, loginState } from './User/UserAtom';
import * as Api from '../Commons/Api';

import { data, data2, data3, data4, options_BarChart } from '../Contents/ChartData';
const StyledContainer = styled.div`
	width: 100vw;
	margin: ${param => param.margin};
`;

const Userpage = () => {
	// const loadingUser = async () => {
	// 	const res = await Api.get(`user/mealdata/${userId}`);
	// 	console.log(res);
	// };
	// useEffect(() => {
	// 	loadingUser();
	// }, []);

	return (
		<>
			<StyledContainer margin="0px">
				<ContentUserPageText />
			</StyledContainer>

			<StyledContainer margin="25px 0 0 0" style={{ display: 'flex' }}>
				<ContentGraph
					data={data}
					num={1}
					height={'10%'}
					width={'42%'}
					title={'금일 영양 정보'}
				></ContentGraph>
			</StyledContainer>
		</>
	);
};
Userpage.defaultProps = { title: '유저페이지' };

export default Userpage;
