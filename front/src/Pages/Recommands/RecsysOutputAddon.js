import React, { useContext } from 'react';
import { RecommandContext } from './RecommandContext';

import { ContentContainer } from '../../Contents/Styles/styleContents';
import FoodCard from '../../Components/FoodCard';
const RecsysOutputAddon = () => {
	const { step, dispatch } = useContext(RecommandContext);
	if (step === 'OUTPUT') {
		return (
			<ContentContainer fluid>
				<h1>{step}</h1>
				<FoodCard />
			</ContentContainer>
		);
	} else {
		return;
	}
};

export default RecsysOutputAddon;
