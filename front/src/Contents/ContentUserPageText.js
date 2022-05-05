import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const StyledToomuchBox = styled.h1`
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

const ContentUserPageText = () => {
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
				당신의 건강상태는 <span style={{ color: 'green' }}>양호</span>입니다
			</StyledToomuchText>
		</div>
	);
};

export default ContentUserPageText;
