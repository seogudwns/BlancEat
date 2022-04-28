import React from 'react';
import * as CardStyle from './styleCard';

const Card = ({ title, description }) => {
	return (
		<CardStyle.Container>
			<CardStyle.Title>{title}</CardStyle.Title>
			<CardStyle.Text>{description}</CardStyle.Text>
		</CardStyle.Container>
	);
};
Card.defaultProps = { title: '타이틀입니다', description: '설명입니다.' };

export default Card;
