import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

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
const ContentGraph = ({ title, color }) => {
	return (
		<>
			<StyledGraphInfo minWidth="350px" width="20%" backgroundColor={color}>
				<StyledGraphInfoText>{title}</StyledGraphInfoText>
			</StyledGraphInfo>
		</>
	);
};

export default ContentGraph;
