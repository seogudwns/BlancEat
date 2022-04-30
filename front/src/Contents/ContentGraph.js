import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import ContentBarChart from './ContentBarChart';

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
const ContentGraph = ({ title, color }) => {
	return (
		<>
			<StyledGraphInfo height="500px" minWidth="500px" width="42%" backgroundColor={color}>
				<StyledGraphInfoText>{title}</StyledGraphInfoText>
				<ContentBarChart />
			</StyledGraphInfo>
		</>
	);
};

export default ContentGraph;
