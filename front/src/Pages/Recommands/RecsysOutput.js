import React, { useContext } from 'react';

import { RecommandContext } from './RecommandContext';
import FoodCard from '../../Components/FoodCard';
import ContentLabel from '../../Components/ContentLabel';
import { SubContainer, LargeButton, CardContainerRow } from '../../Contents/Styles/styleContents';

const RecsysOutput = () => {
	const title = '식단 추천';
	const subtitle = '균형 잡힌 영양을 위한 식단입니다';
	const { dispatch } = useContext(RecommandContext);

	const handleClick = () => {
		dispatch({ type: 'RESET' });
	};

	return (
		<SubContainer fluid>
			<ContentLabel title={title} subtitle={subtitle} />
			<CardContainerRow>
				<FoodCard />
				<FoodCard />
				<FoodCard />
			</CardContainerRow>
			<LargeButton variant="success" onClick={handleClick}>
				<h3>돌아가기 {'>'}</h3>
			</LargeButton>
		</SubContainer>
	);
};

export default RecsysOutput;
