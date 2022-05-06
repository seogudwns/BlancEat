import { Carousel } from 'react-bootstrap';
import { PageContainer } from '../Pages/Styles/stylePages';

import React from 'react';

const ContentApproach = () => {
	const imgs = ['/approach01.png', '/approach02.png', '/approach03.png'];

	return (
		<>
			<PageContainer fluid>
				<Carousel fade>
					{imgs.map(v => (
						<Carousel.Item key={v}>
							<img src={v} />
						</Carousel.Item>
					))}
				</Carousel>
			</PageContainer>
		</>
	);
};

export default ContentApproach;
