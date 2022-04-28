import React, { useState } from 'react';

import * as Content from './styleContents';

const ContentApproach = () => {
	const mainImages = ['/mainImage1.jpg', '/mainImage2.jpg', '/mainImage3.jpg'];
	const [curImgIndex, setCurImgIndex] = useState(0);
	return (
		<Content.StyledSection bgImage={mainImages[curImgIndex]}>
			<Content.StyledContents jc="center" ai="flex-end">
				<Content.StyledImageButton
					onClick={() => setCurImgIndex(0)}
					{...(curImgIndex === 0 ? { color: '#00c14d' } : { color: 'white' })}
				></Content.StyledImageButton>
				<Content.StyledImageButton
					onClick={() => setCurImgIndex(1)}
					{...(curImgIndex === 1 ? { color: '#00c14d' } : { color: 'white' })}
				></Content.StyledImageButton>
				<Content.StyledImageButton
					onClick={() => setCurImgIndex(2)}
					{...(curImgIndex === 2 ? { color: '#00c14d' } : { color: 'white' })}
				></Content.StyledImageButton>
			</Content.StyledContents>
		</Content.StyledSection>
	);
};

export default ContentApproach;
