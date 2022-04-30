import React from 'react';
import { StyledCard, Divider } from './Styles/styleCard';
import { Card } from 'react-bootstrap';

const FoodCard = ({ title, description, url }) => {
	return (
		<StyledCard>
			<Card.Img variant="top" src={url} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Divider />
				<Card.Text>{description}</Card.Text>
			</Card.Body>
		</StyledCard>
	);
};

const tempImgUrl =
	'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80';

FoodCard.defaultProps = {
	title: '타이틀입니다',
	description: '설명입니다.',
	url: tempImgUrl,
};

export default FoodCard;
