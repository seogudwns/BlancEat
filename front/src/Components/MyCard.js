import { Card } from 'react-bootstrap';
import React from 'react';

const MyCard = () => {
	return ['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Light', 'Dark'].map(
		(variant, idx) => (
			<Card
				bg={variant.toLowerCase()}
				key={idx}
				text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
				style={{ width: '18rem' }}
				className="mb-2"
			>
				<Card.Header>Header</Card.Header>
				<Card.Body>
					<Card.Title>{variant} Card Title </Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of
						the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
		),
	);
};
export default MyCard;
/*
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
*/
/*

var Columns = require('react-columns');
function Component(){
  var queries = [{
    columns: 2,
    query: 'min-width: 500px'
  }, {
    columns: 3,
    query: 'min-width: 1000px'
  }];
  return (
  <Columns queries={queries}>
    <img src="http://placehold.it/800x1200?text=1" alt="" />
    <img src="http://placehold.it/800x600?text=2" alt="" />
    <img src="http://placehold.it/800x800?text=3" alt="" />
    <img src="http://placehold.it/800x600?text=4" alt="" />
    <img src="http://placehold.it/800x1200?text=5" alt="" />
    <img src="http://placehold.it/800x600?text=6" alt="" />
    <img src="http://placehold.it/800x400?text=7" alt="" />
    <img src="http://placehold.it/800x400?text=8" alt="" />
    <img src="http://placehold.it/800x400?text=9" alt="" />
    <img src="http://placehold.it/800x800?text=10" alt="" />
  </Columns>
  );
}
*/
