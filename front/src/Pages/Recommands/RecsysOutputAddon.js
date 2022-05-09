import React, { useContext, useEffect } from 'react';

import { FoodDataContext } from './ContentRecommand';
import { RecommandContext } from './RecommandContext';
import { ContentContainer } from '../../Contents/Styles/styleContents';

import ContentLabel from '../../Components/ContentLabel';

const RecsysOutputAddon = () => {
	const title = '추천 식단 근거';
	const subtitle = '24시간 기준 당신의 영양상태입니다';
	const { step } = useContext(RecommandContext);
	const { foodData } = useContext(FoodDataContext);
	// let newList = [];
	// useEffect(()=>{},foodData);
	useEffect(() => {
		// console.log('RecsysOutputAddon', foodData);
		// newList = [...foodData];
	}, foodData); //이제는 굳이 useEffect가 필요한지?

	if (step === 'OUTPUT') {
		return (
			<ContentContainer fluid>
				<ContentContainer fluid>
					<ContentLabel title={title} subtitle={subtitle} />
					<br />
					{foodData ? <h1>{foodData[0]?.foodName}</h1> : <h1>없나봐</h1>}
				</ContentContainer>
			</ContentContainer>
		);
	} else {
		return;
	}
};

export default RecsysOutputAddon;
