import React, { useContext, useEffect } from 'react';

import { FoodDataContext } from './ContentRecommand';
import { RecommandContext } from './RecommandContext';
import { ContentContainer } from '../../Contents/Styles/styleContents';

import ContentLabel from '../../Components/ContentLabel';
// import ListFood from './ListFood';
const ListFood = foodlist => {
	let listTags = [];
	// foodlist.forEach(element => {
	// 	console.log(element.text);
	// 	listTags.push(<li key={element.id}>{element.text}</li>);
	// });
	foodlist.map(el => {
		listTags.push(<li key={el.id}>{el.text}</li>);
	});
	console.log('리스트 푸드에 들어왔다');
	console.log('--------------------');

	return (
		<div>
			<ul>{listTags}</ul>
			<ul>
				<li>hi</li>
				<li>hi</li>
				<li>hi</li>
				<li>hi</li>
			</ul>
		</div>
	);
};

const RecsysOutputAddon = () => {
	const title = '추천 식단 근거';
	const subtitle = '24시간 기준 당신의 영양상태입니다';
	const { step } = useContext(RecommandContext);
	const { foodData } = useContext(FoodDataContext);
	// let newList = [];
	// useEffect(()=>{},foodData);
	useEffect(() => {
		console.log('RecsysOutputAddon', foodData);
		// newList = [...foodData];
	}, foodData);

	if (step === 'OUTPUT') {
		return (
			<ContentContainer fluid>
				<ContentContainer fluid>
					<ContentLabel title={title} subtitle={subtitle} />
					<br />
					<ListFood foodlist={foodData} />
					{foodData ? <h1>{foodData[0].id}</h1> : <h1>없나봐</h1>}
				</ContentContainer>
			</ContentContainer>
		);
	} else {
		return;
	}
};

export default RecsysOutputAddon;
