import React from 'react';
import * as CardStyle from './Styles/styleCard';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const StyledButton = styled(Button)`
	color: palevioletred;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

const Card = ({ title, description }) => {
	return (
		<CardStyle.Container>
			<CardStyle.Title>{title}</CardStyle.Title>
			<CardStyle.Text>{description}</CardStyle.Text>
			<StyledButton>버튼입니다</StyledButton>
		</CardStyle.Container>
	);
};
Card.defaultProps = { title: '타이틀입니다', description: '설명입니다.' };

export default Card;
