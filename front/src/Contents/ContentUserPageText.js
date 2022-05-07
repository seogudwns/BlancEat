import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const StyledToomuchBox = styled.h1`
	margin: ${param => (param.margin ? param.margin : 'none')};
	padding: ${param => (param.padding ? param.padding : 'none')};
	background-color: green;
	color: white;
	height: 70px;
	font-size: ${param => (param.fontSize ? param.fontSize : 'none')};
`;
const StyledToomuchText = styled.h1`
	margin: ${param => (param.margin ? param.margin : 'none')};
	padding: ${param => (param.padding ? param.padding : 'none')};
	color: gray;
	font-size: ${param => (param.fontSize ? param.fontSize : 'none')};
`;

const ContentUserPageText = () => {
	const userInfos = ['연령 만 29 세/ 남성', '키 175cm', '몸무게 68kg'];

	return (
		<div style={{ display: 'inline-flex' }}>
			<StyledToomuchBox fontSize="30px" margin="20px 0 10px 30px" padding="5px 50px 0px 50px">
				사용자 건강정보
			</StyledToomuchBox>
			<StyledToomuchText
				margin="20px 0 10px 30px"
				padding="5px 50px 0px 50px"
				fontSize="30px"
			>
				당신은{' '}
				<span style={{ color: 'green' }}>
					{userInfos[0]}/{userInfos[1]}/{userInfos[2]}
				</span>
				입니다
			</StyledToomuchText>
		</div>
	);
};

export default ContentUserPageText;
