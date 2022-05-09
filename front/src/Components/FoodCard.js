import React from 'react';
import { StyledCard, Divider } from './Styles/styleCard';
import { Card, Button } from 'react-bootstrap';
import { BlankImageURL } from '../Commons/consts';

/* clickHandler props make FoodCard works like button */
const FoodCard = ({ clickHandler, foodData, id }) => {
	const title = foodData.foodName;
	const Description = () => {
		return (
			<div>
				열량 : {foodData.ENERGY.Cal} KCal <br />
				탄수화물 : {foodData.MAJORNUTS.Carbon} g <br />
				지방 : {foodData.MAJORNUTS.Fat} g <br />
				단백질: {foodData.MAJORNUTS.Protein} g<br />
			</div>
		);
	};
	const url = foodData.ImgURL;

	return (
		<StyledCard>
			<Card.Img variant="top" src={url} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Divider />
				<Card.Text>
					<Description />
				</Card.Text>
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
