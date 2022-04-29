import React, { useContext } from 'react';

import { RecommandContext } from './RecommandContext';
import { ContentContainer } from '../../Contents/Styles/styleContents';
import FoodCard from '../../Components/FoodCard';
import ContentLabel from '../../Components/ContentLabel';

const RecsysOutputAddon = () => {
	const title = '추천 식단 근거';
	const subtitle = '24시간 기준 당신의 영양상태입니다';
	const { step } = useContext(RecommandContext);
	if (step === 'OUTPUT') {
		return (
			<ContentContainer fluid>
				<ContentContainer fluid>
					<ContentLabel title={title} subtitle={subtitle} subtitleColor="white" />
					<FoodCard />
				</ContentContainer>
			</ContentContainer>
		);
	} else {
		return;
	}
};

export default RecsysOutputAddon;
