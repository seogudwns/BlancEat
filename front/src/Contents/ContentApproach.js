import { Carousel } from 'react-bootstrap';

import React from 'react';

const ContentApproach = () => {
	return (
		<>
			<Carousel fade indicators={false} prevIcon={null} nextIcon={null}>
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
		</>
	);
};

export default ContentApproach;
