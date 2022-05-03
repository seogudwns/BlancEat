import React from 'react';
import { StyledCard, Divider } from './Styles/styleCard';
import { Card, Button } from 'react-bootstrap';
import { BlankImageURL } from '../Commons/consts';

/* clickHandler props make FoodCard works like button */
const FoodCard = ({ clickHandler, foodData, id }) => {
	const title = foodData.foodName;
	const description = foodData.Cal;
	const url = foodData.ImgURL || BlankImageURL;

	return (
		<StyledCard>
			<Card.Img variant="top" src={url} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Divider />
				<Card.Text>{description}</Card.Text>
				{clickHandler && (
					<Button
						id={id}
						variant="link"
						onClick={e => {
							clickHandler(e);
						}}
					>
						자세히
					</Button>
				)}
			</Card.Body>
		</StyledCard>
	);
};

FoodCard.defaultProps = {
	title: '타이틀입니다',
	description: '설명입니다.',
};

export default FoodCard;
