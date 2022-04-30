import { Carousel } from 'react-bootstrap';
import { PageContainer } from '../Pages/Styles/stylePages';

import React from 'react';

const ContentApproach = () => {
	return (
		<>
			<PageContainer fluid>
				<Carousel fade>
					<Carousel.Item>
						<img src="/approach01.png" />
					</Carousel.Item>
					<Carousel.Item>
						<img src="/approach02.png" />
					</Carousel.Item>
					<Carousel.Item>
						<img src="/approach03.png" />
					</Carousel.Item>
				</Carousel>
			</PageContainer>
		</>
	);
};

export default ContentApproach;
